import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { ButtonIcon } from "./ButtonIcon";

export const ButtonShare = () => {
  return (
    <ButtonIcon icon={<ArrowUpTrayIcon className="w-[1em] h-[1em]" />}>
      <span className="text-sm">Share</span>
    </ButtonIcon>
  );
};
