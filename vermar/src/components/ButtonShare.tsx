import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export const ButtonShare = () => {
  const router = useRouter();

  return (
    <button className="flex cursor-pointer select-none items-center pr-1 hover:text-skin-link">
      <ArrowUpTrayIcon className="h-[1.2em] w-[1.2em]" />
      <span className="ml-1 hidden md:block">Share</span>
    </button>
  );
};
