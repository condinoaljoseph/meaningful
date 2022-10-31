import clsx from "clsx";
import Image from "next/image";

export const AvatarUser = ({
  src,
  size,
  className = "",
}: {
  src: string;
  size?: string;
  className?: string;
}) => {
  return (
    <span
      className={clsx("flex shrink-0 items-center justify-center", className)}
    >
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
