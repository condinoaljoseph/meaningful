import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export const ButtonBack = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <div className="inline-flex items-center gap-1 text-skin-text hover:text-skin-link">
        <ArrowLeftIcon className="w-[1em] h-[1em]" />
        Back
      </div>
    </button>
  );
};
