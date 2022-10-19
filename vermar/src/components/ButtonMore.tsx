import { Menu } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter } from "next/router";
import { ButtonIcon } from "./ButtonIcon";

export const ButtonMore = ({
  user,
  postId,
  position = "bottom-right",
}: {
  user: string;
  postId: number;
  position?: "bottom-right" | "top-right" | "center-top";
}) => {
  const { push } = useRouter();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center rounded-full p-[6px] text-md text-skin-text transition-colors duration-200 hover:text-skin-link">
        <ButtonIcon
          icon={<EllipsisHorizontalIcon className="w-[1em] h-[1em]" />}
        />
      </Menu.Button>
      <Menu.Items
        className={clsx(
          "overflow-hidden absolute z-50 rounded-2xl border bg-skin-header-bg shadow-lg outline-none",
          {
            "right-0": position === "bottom-right",
            "-top-[44px] right-0": position === "top-right",
            "-top-[44px] left-1/2 -translate-x-1/2": position === "center-top",
          }
        )}
      >
        <div className="no-scrollbar max-h-[300px] overflow-auto">
          <Menu.Item>
            {({ active }) => (
              <div
                className={clsx(
                  active
                    ? "bg-skin-border text-skin-link"
                    : "bg-skin-header-bg text-skin-text",
                  "cursor-pointer whitespace-nowrap px-3 py-2"
                )}
                onClick={() => {
                  push(`/${user}/${postId}/edit`);
                }}
              >
                Edit post
              </div>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};
