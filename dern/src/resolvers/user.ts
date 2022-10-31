import { User } from "../entities/User";
import { Arg, Mutation, Query, Resolver, Ctx } from "type-graphql";
import { AppContext } from "../types";
import { COOKIE_NAME } from "../constants";

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async user(@Arg("username") username: string): Promise<User | null> {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return null;
    }

    return user;
  }

  @Query(() => [User])
  async users(): Promise<User[]> {
    return await User.find();
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: AppContext) {
    const { userId } = ctx.req.session;

    if (!userId) {
      return null;
    }

    return await User.findOne(userId);
  }

  @Mutation(() => Boolean)
  logout(@Ctx() ctx: AppContext) {
    return new Promise((resolve) => {
      ctx.req.session.destroy((error) => {
        if (error) {
          console.log(error);
          resolve(false);
        }

        ctx.res.clearCookie(COOKIE_NAME);
        resolve(true);
      });
    });
  }
}
