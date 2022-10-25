import { useApolloClient } from "@apollo/client";
import { Menu } from "@headlessui/react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { useLogoutMutation } from "../../generated/graphql";
import { useAppPersistStore } from "../../store/useAppStore";

export const MenuAccount = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const user = useAppPersistStore((state) => state.user);

  return (
    <Menu as="div" className="relative inline-block h-full text-left">
      <Menu.Button className="button px-[22px] border border-skin-border bg-transparent text-skin-link text-[18px] rounded-[23px] h-[46px] flex items-center hover:border-skin-text">
        {children}
      </Menu.Button>
      <Menu.Items className="overflow-hidden absolute right-0 top-[55px] rounded-2xl border bg-skin-header-bg shadow-lg outline-none">
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
                onClick={() => push(`/${user?.username}`)}
              >
                View profile
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
                onClick={async () => {
                  await logout();
                  await apolloClient.resetStore();
                }}
              >
                Log out
              </div>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
};
