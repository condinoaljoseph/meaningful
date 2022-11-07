import {
  Arg,
  Ctx,
  Int,
  Mutation,
  registerEnumType,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { AppContext } from "../types";
import { isAuth } from "../middleware/isAuth";
import { Reaction, ReactionTypes } from "../entities/Reaction";
import { getConnection } from "typeorm";

registerEnumType(ReactionTypes, {
  name: "ReactionTypes", // this one is mandatory
});

@Resolver()
export class ReactionResolver {
  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async addReaction(
    @Arg("postId", () => Int) postId: number,
    @Arg("type", () => ReactionTypes) type: ReactionTypes,
    @Arg("value") value: boolean,
    @Ctx() ctx: AppContext
  ): Promise<boolean> {
    const { userId } = ctx.req.session;

    const reaction = await Reaction.findOne({
      where: {
        postId,
        userId,
        type,
      },
    });

    if (reaction && reaction.value !== value) {
      await getConnection().transaction(async (tem) => {
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
      await getConnection().transaction(async (tem) => {
        await tem.query(
          `
              insert into reaction ("userId", "postId", type, value) 
              values ($1, $2, $3, $4) 
            `,
          [userId, postId, type, true]
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
