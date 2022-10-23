import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { ReactionTypes, useAddReactionMutation } from "../generated/graphql";
import { ButtonIcon } from "./ButtonIcon";

export const ButtonReact = ({
  postId,
  type,
  reacts = 0,
  reacted = false,
}: {
  postId: number;
  type: ReactionTypes;
  reacts?: number;
  reacted?: boolean;
}) => {
  const [addReaction] = useAddReactionMutation();

  return (
    <ButtonIcon
      icon={
        reacted ? (
          <HeartIconSolid className="w-[1em] h-[1em] text-red" />
        ) : (
          <HeartIcon className="w-[1em] h-[1em]" />
        )
      }
      onClick={async () => {
        await addReaction({
          variables: {
            postId,
            type,
            value: !reacted,
          },

          update: (cache) => cache.evict({ id: "Post:" + postId }),
        });
      }}
    >
      <span className="text-sm">{reacts}</span>
    </ButtonIcon>
  );
};
