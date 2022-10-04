import clsx from "clsx";
import Image from "next/image";

export const Avatar = ({ src, size }: { src: string; size?: string }) => {
  return (
    <span className="flex shrink-0 items-center justify-center">
      <Image
        className={clsx("rounded-full bg-skin-border")}
        src={src}
        alt="avatar"
        width={Number(size)}
        height={Number(size)}
      />
    </span>
  );
};
