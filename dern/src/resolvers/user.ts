import { User } from "../entities/User";
import {
  Arg,
  Mutation,
  Query,
  Resolver,
  Ctx,
  UseMiddleware,
  Field,
  InputType,
} from "type-graphql";
import { AppContext } from "../types";
import { COOKIE_NAME } from "../constants";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";

@InputType()
class UpdateUserRequest {
  @Field()
  displayName: string;

  @Field()
  bio: string;
}

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

  @Mutation(() => User, { nullable: true })
  @UseMiddleware(isAuth)
  async updateUser(
    @Arg("request") request: UpdateUserRequest,
    @Ctx() ctx: AppContext
  ): Promise<User> {
    const { displayName, bio } = request;

    const result = await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({ displayName, bio })
      .where("id = :id", {
        id: ctx.req.session.userId,
      })
      .returning("*")
      .execute();

    return result.raw[0];
  }
}
