import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { AppDataSource } from "../data-source";
import { Post } from "../entities/Post";
import { AppContext } from "../types";
import { isAuth } from "../middleware/isAuth";

@InputType()
class PostInput {
  @Field()
  title: string;

  @Field()
  content: string;
}

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return await Post.find();
  }

  @Query(() => Post, { nullable: true })
  async post(@Arg("id") id: number): Promise<Post | null> {
    return await Post.findOneBy({ id });
  }

  @Mutation(() => Post)
  @UseMiddleware(isAuth)
  async createPost(
    @Arg("options") options: PostInput,
    @Ctx() ctx: AppContext
  ): Promise<Post> {
    return Post.create({
      ...options,
      creatorId: ctx.req.session.userId,
    }).save();
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg("id") id: number,
    @Arg("title") title: string,
    @Arg("content") content: string,
    @Ctx() ctx: AppContext
  ): Promise<Post> {
    const result = await AppDataSource.createQueryBuilder()
      .update(Post)
      .set({ title, content })
      .where('id = :id and "creatorId" = :creatorId', {
        id,
        creatorId: ctx.req.session.userId,
      })
      .returning("*")
      .execute();

    return result.raw[0];
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deletePost(
    @Arg("id") id: number,
    @Ctx() ctx: AppContext
  ): Promise<boolean> {
    await Post.delete({ id, creatorId: ctx.req.session.userId });
    return true;
  }
}
