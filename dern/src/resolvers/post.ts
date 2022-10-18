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
import { Post } from "../entities/Post";
import { AppContext } from "../types";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";

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
  async posts(
    @Arg("limit") limit: number,
    @Arg("cursor", () => String, { nullable: true }) cursor: string
  ): Promise<Post[]> {
    const qb = getConnection()
      .getRepository(Post)
      .createQueryBuilder("p")
      .innerJoinAndSelect("p.creator", "u", 'u.id = p."creatorId"')
      .take(limit);

    if (cursor) {
      qb.where('p."createdAt" < :cursor', {
        cursor: new Date(parseInt(cursor)),
      });
    }

    return await qb.getMany();
  }

  @Query(() => Post, { nullable: true })
  async post(@Arg("id") id: number): Promise<Post | undefined> {
    return await getConnection()
      .getRepository(Post)
      .createQueryBuilder("p")
      .innerJoinAndSelect("p.creator", "u", 'u.id = p."creatorId"')
      .where("p.id = :id", { id })
      .getOne();
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
    @Arg("id") id: number,
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
    @Arg("id") id: number,
    @Ctx() ctx: AppContext
  ): Promise<boolean> {
    await Post.delete({ id, creatorId: ctx.req.session.userId });
    return true;
  }
}
