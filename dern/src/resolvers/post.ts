import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import { Post } from "../entities/Post";
import { AppContext } from "../types";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";
import { User } from "../entities/User";

@InputType()
class PostInput {
  @Field()
  title: string;

  @Field()
  content: string;
}

@InputType()
class PostsQueryRequest {
  @Field(() => Int)
  limit: number;

  @Field(() => String, { nullable: true })
  cursor: string;

  @Field(() => Int, { nullable: true })
  creatorId: number;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];

  @Field()
  hasMore: boolean;
}

@Resolver(Post)
export class PostResolver {
  @FieldResolver(() => User)
  creator(@Root() post: Post, @Ctx() ctx: AppContext) {
    return ctx.userLoader.load(post.creatorId);
  }

  @FieldResolver(() => Boolean)
  async likeStatus(
    @Root() post: Post,
    @Ctx() ctx: AppContext
  ): Promise<Boolean> {
    const { userId } = ctx.req.session;

    if (!userId) {
      return false;
    }

    const reaction = await ctx.reactionLoader.load({
      postId: post.id,
      userId,
    });

    return reaction ? reaction.value : false;
  }

  @Query(() => PaginatedPosts)
  async posts(
    @Arg("request") request: PostsQueryRequest
  ): Promise<PaginatedPosts> {
    const { limit, cursor, creatorId } = request;
    const realLimit = Math.max(5, limit);

    const qb = getConnection()
      .getRepository(Post)
      .createQueryBuilder("p")
      .where("true")
      .orderBy('p."createdAt"', "DESC")
      .limit(realLimit + 1);

    if (cursor) {
      qb.andWhere('p."createdAt" < :cursor', {
        cursor: new Date(parseInt(cursor)),
      });
    }

    if (creatorId) {
      qb.andWhere('p."creatorId" = :creatorId', {
        creatorId,
      });
    }

    const posts = await qb.getMany();

    return {
      posts: posts.slice(0, realLimit),
      hasMore: posts.length === realLimit + 1,
    };
  }

  @Query(() => Post, { nullable: true })
  async post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
    return await Post.findOne(id, { relations: ["creator"] });
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
  @UseMiddleware(isAuth)
  async updatePost(
    @Arg("id", () => Int) id: number,
    @Arg("title") title: string,
    @Arg("content") content: string,
    @Ctx() ctx: AppContext
  ): Promise<Post> {
    const result = await getConnection()
      .createQueryBuilder()
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
    @Arg("id", () => Int) id: number,
    @Ctx() ctx: AppContext
  ): Promise<boolean> {
    await Post.delete({ id, creatorId: ctx.req.session.userId });
    return true;
  }
}
