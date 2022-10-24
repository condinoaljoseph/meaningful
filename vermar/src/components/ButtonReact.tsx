import { ApolloCache, gql } from "@apollo/client";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import {
  AddReactionMutation,
  ReactionTypes,
  useAddReactionMutation,
} from "../generated/graphql";
import { useAppStore } from "../store/useAppStore";
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
  const setShowAuthModal = useAppStore((state) => state.setShowAuthModal);

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

          update: (cache: ApolloCache<AddReactionMutation>) => {
            const data = cache.readFragment<{
              id: number;
              likes: number;
              likeStatus: boolean;
            }>({
              id: "Post:" + postId,
              fragment: gql`
                fragment _ on Post {
                  id
                  likes
                  likeStatus
                }
              `,
            });

            if (data) {
              if (data.likeStatus !== reacted) {
                return;
              }

              const newLikes = data.likes + (data.likeStatus ? -1 : 1);

              cache.writeFragment({
                id: "Post:" + postId,
                fragment: gql`
                  fragment __ on Post {
                    likes
                    likeStatus
                  }
                `,
                data: { likes: newLikes, likeStatus: !reacted },
              });
            }
          },

          onError: (error) => {
            if (error.message === "not authenticated") {
              setShowAuthModal(true);
            }
          },
        });
      }}
    >
      <span className="text-sm">{reacts}</span>
    </ButtonIcon>
  );
};
