import { Arg, Ctx, Int, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { AppDataSource } from "../data-source";
import { AppContext } from "../types";
import { isAuth } from "../middleware/isAuth";
import { Reaction, ReactionTypes } from "../entities/Reaction";

@Resolver()
export class ReactionResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async react(
    @Arg("postId", () => Int) postId: number,
    @Arg("type") type: ReactionTypes,
    @Arg("value") value: boolean,
    @Ctx() ctx: AppContext
  ): Promise<boolean> {
    const { userId } = ctx.req.session;
    const reaction = await Reaction.findOneBy({
      postId,
      userId: ctx.req.session.userId,
      type,
    });

    if (reaction && reaction.value !== value) {
      await AppDataSource.transaction(async (tem) => {
        await tem.query(
          `
              update reaction
              set value = $1
              where "userId" = $2 and "postId" = $3 and type = $4
            `,
          [value, userId, postId, type]
        );

        await tem.query(
          `
              update post 
              set ${type}s = ${type}s + $1
              where id = $2
            `,
          [value ? 1 : -1, postId]
        );
      });
    } else if (!reaction) {
      await AppDataSource.transaction(async (tem) => {
        await tem.query(
          `
              insert into reaction ("userId", "postId", type, value) 
              values ($1, $2, $3, $4) 
            `,
          [ctx.req.session.userId, postId, type, true]
        );

        await tem.query(
          `
              update post 
              set ${type}s = ${type}s + $1
              where id = $2
            `,
          [1, postId]
        );
      });
    }

    return true;
  }
}
