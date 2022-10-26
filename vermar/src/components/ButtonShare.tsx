import { Float } from "@headlessui-float/react";
import { Menu } from "@headlessui/react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { Placement } from "@floating-ui/dom";

export const ButtonShare = ({
  placement = "bottom-end",
}: {
  placement?: Placement;
}) => {
  return (
    <Menu as="div" className="relative">
      <Float
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        offset={8}
        shift={6}
        flip={16}
        zIndex={50}
        placement={placement}
      >
        <Menu.Button className="flex items-center rounded-full p-[6px] text-md text-skin-text transition-colors duration-200 hover:text-skin-link">
          <ArrowUpTrayIcon className="w-[1em] h-[1em]" />
        </Menu.Button>
        <Menu.Items className="overflow-hidden z-50 rounded-2xl border bg-skin-header-bg shadow-lg outline-none">
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
                >
                  Copy link
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
                >
                  Share to Twitter
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
                >
                  Share to Facebook
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Float>
    </Menu>
  );
};
