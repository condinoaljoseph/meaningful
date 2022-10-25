import { CheckIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Button } from "./ui/Button";

export const ButtonFollow = () => {
  const isFollowing = true;

  return (
    <Button
      className={clsx("group min-w-[140px]", {
        "hover:!border-red hover:!bg-red hover:!bg-opacity-5 hover:!text-red":
          isFollowing,
      })}
    >
      {!isFollowing ? (
        <span>Follow</span>
      ) : (
        <span>
          <span className="flex items-center gap-2 group-hover:hidden">
            <CheckIcon className="w-[1.2em] h-[1.2em] text-green" /> Followed
          </span>
          <span className="hidden group-hover:block">Unfollow</span>
        </span>
      )}
    </Button>
  );
};
