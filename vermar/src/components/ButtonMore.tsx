import { Menu } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useDeletePostMutation } from "../generated/graphql";
import { useAppPersistStore } from "../store/useAppStore";

export const ButtonMore = ({
  username,
  postId,
  position = "bottom-right",
}: {
  username?: string;
  postId: number;
  position?: "bottom-right" | "top-right" | "center-top";
}) => {
  const { push } = useRouter();
  const [deletePost] = useDeletePostMutation();
  const user = useAppPersistStore((state) => state.user);

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center rounded-full p-[6px] text-md text-skin-text transition-colors duration-200 hover:text-skin-link">
        <EllipsisHorizontalIcon className="w-[1em] h-[1em]" />
      </Menu.Button>
      <Menu.Items
        className={clsx(
          "overflow-hidden absolute z-50 rounded-2xl border bg-skin-header-bg shadow-lg outline-none",
          {
            "right-0": position === "bottom-right",
            "bottom-[44px] right-0": position === "top-right",
            "bottom-[44px] left-1/2 -translate-x-1/2":
              position === "center-top",
          }
        )}
      >
        <div className="no-scrollbar max-h-[300px] overflow-auto">
          {username === user?.username ? (
            <>
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
                      push(`/${username}/${postId}/edit`);
                    }}
                  >
                    Edit
                  </div>
                )}
              </Menu.Item>
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
                      if (confirm("Are you sure you want to delete?")) {
                        deletePost({
                          variables: { id: postId },
                          update: (cache) => {
                            cache.evict({ id: "Post:" + postId });
                          },
                          onCompleted: () => {
                            push(`/${user?.username}`);
                          },
                        });
                      }
                    }}
                  >
                    Delete
                  </div>
                )}
              </Menu.Item>
            </>
          ) : (
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
                    console.log("report post");
                  }}
                >
                  Report
                </div>
              )}
            </Menu.Item>
          )}
        </div>
      </Menu.Items>
    </Menu>
  );
};
