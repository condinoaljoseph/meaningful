import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export const ButtonBack = () => {
  const { back } = useRouter();

  return (
    <button onClick={() => back()}>
      <div className="inline-flex items-center gap-1 text-skin-text hover:text-skin-link">
        <ArrowLeftIcon className="w-[0.8em] h-[0.8em]" />
        Back
      </div>
    </button>
  );
};
