import { HeartIcon } from "@heroicons/react/24/outline";
import { ReactionTypes, useAddReactionMutation } from "../generated/graphql";
import { ButtonIcon } from "./ButtonIcon";

export const ButtonReact = ({
  postId,
  type,
  reacts = 0,
}: {
  postId: number;
  type: ReactionTypes;
  reacts?: number;
}) => {
  const [addReaction] = useAddReactionMutation();

  return (
    <ButtonIcon
      icon={<HeartIcon className="w-[1em] h-[1em]" />}
      onClick={async () => {
        await addReaction({
          variables: {
            postId,
            type,
            value: false,
          },
        });
      }}
    >
      <span className="text-sm">{reacts}</span>
    </ButtonIcon>
  );
};
