import { Entity, Column, BaseEntity, ManyToOne, PrimaryColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { User } from "./User";
import { Post } from "./Post";

export enum ReactionTypes {
  LIKE = "like",
}

@ObjectType()
@Entity()
export class Reaction extends BaseEntity {
  @Column()
  value: boolean;

  @Column({ type: "varchar" })
  type: ReactionTypes;

  @Field()
  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => User, (user) => user.reactions)
  user: User;

  @Field()
  @PrimaryColumn()
  postId: number;

  @ManyToOne(() => Post, (post) => post.reactions, { onDelete: "CASCADE" })
  post: Post;
}
