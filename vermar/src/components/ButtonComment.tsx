import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { ButtonIcon } from "./ButtonIcon";

export const ButtonComment = ({ comments = 0 }: { comments?: number }) => {
  return (
    <ButtonIcon
      icon={<ChatBubbleBottomCenterIcon className="w-[1em] h-[1em]" />}
    >
      <span className="text-sm">{comments}</span>
    </ButtonIcon>
  );
};
