import { User } from "../entities/User";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { AppDataSource } from "../data-source";

@InputType()
class UserInput {
  @Field()
  firstName: string;
  @Field()
  lastName: string;
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return await User.find();
  }

  @Query(() => User, { nullable: true })
  async user(@Arg("id") id: number): Promise<User | null> {
    return await User.findOneBy({ id });
  }

  @Mutation(() => User)
  async createUser(@Arg("input") input: UserInput): Promise<User> {
    return User.create({ ...input }).save();
  }

  @Mutation(() => User)
  async updateUser(
    @Arg("id") id: number,
    @Arg("input") input: UserInput
  ): Promise<User> {
    const result = await AppDataSource.createQueryBuilder()
      .update(User)
      .set({ ...input })
      .where("id = :id", { id })
      .returning("*")
      .execute();

    return result.raw[0];
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("id") id: number): Promise<boolean> {
    await User.delete({ id });
    return true;
  }
}
