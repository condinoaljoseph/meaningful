import DataLoader from "dataloader";
import { Reaction } from "../entities/Reaction";

export const createReactionLoader = () =>
  new DataLoader<{ postId: number; userId: number }, Reaction | null>(
    async (keys) => {
      const reactions = await Reaction.findByIds(keys as any);

      const reactionIdsToReaction: Record<string, Reaction> = {};
      reactions.forEach((reaction) => {
        reactionIdsToReaction[`${reaction.userId}|${reaction.postId}`] =
          reaction;
      });

      return keys.map((key) => {
        return reactionIdsToReaction[`${key.userId}|${key.postId}`];
      });
    }
  );
