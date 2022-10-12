import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export const ButtonShare = () => {
  const router = useRouter();

  return (
    <button className="flex cursor-pointer select-none items-center pr-1 hover:text-skin-link">
      <ArrowUpTrayIcon className="h-[1em] w-[1em]" />
      <span className="ml-1 hidden md:block">Share</span>
    </button>
  );
};
