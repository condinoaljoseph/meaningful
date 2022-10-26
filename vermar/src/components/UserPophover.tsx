import { Popover } from "@headlessui/react";
import { useRef, useState } from "react";
import { AvatarUser } from "./ui/AvatarUser";
import { Button } from "./ui/Button";
import { Float } from "@headlessui-float/react";
import { User } from "../generated/graphql";
import { useRouter } from "next/router";
import Link from "next/link";

export const UserPophover = ({ user }: { user: User }) => {
  const [show, setShow] = useState<boolean>(false);
  const timerOpen = useRef<any>(null);
  const timerClose = useRef<any>(null);

  const open = () => {
    if (timerClose.current !== null) {
      clearTimeout(timerClose.current);
      timerClose.current = null;
    }
    timerOpen.current = setTimeout(() => {
      setShow(true);
    }, 200);
  };

  const delayClose = () => {
    if (timerOpen.current !== null) {
      clearTimeout(timerOpen.current);
      timerOpen.current = null;
    }
    timerClose.current = setTimeout(() => {
      setShow(false);
    }, 150);
  };

  return (
    <Popover>
      <Float
        show={show}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        zIndex={50}
        offset={10}
        shift={16}
        flip={16}
        portal
      >
        <Popover.Button
          className="outline-none"
          onMouseEnter={open}
          onMouseLeave={delayClose}
        >
          <Link href={`/${user.username}`}>
            <a>
              <div className="flex items-center">
                <AvatarUser user={user.username} size="28" />
                <span className="ml-2 text-skin-link">{user.username}</span>
              </div>
            </a>
          </Link>
        </Popover.Button>
        <Popover.Panel
          static
          className="w-screen outline-none sm:max-w-sm"
          onMouseEnter={open}
          onMouseLeave={delayClose}
        >
          <div className="overflow-hidden rounded-2xl border bg-skin-header-bg shadow-lg">
            <div className="no-scrollbar max-h-[85vh] overflow-y-auto overscroll-contain">
              <div className="p-4">
                <div className="flex">
                  <div>
                    <AvatarUser user={user.username} size="69" />
                  </div>
                  <div>
                    <div className="truncate px-3 text-lg font-semibold leading-10 text-skin-heading">
                      {user.username}
                    </div>
                    <div className="flex px-3 min-w-0 cursor-pointer items-center rounded-full text-xs">
                      <div className="truncate">2 Followers</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex w-full">
                  <div className="w-1/2 pr-2">
                    <Link href={`/${user.username}`}>
                      <Button primary className="w-full">
                        View Profile
                      </Button>
                    </Link>
                  </div>
                  {/* <div className="w-1/2 pl-2">
                    <Button className="w-full">Follow</Button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Float>
    </Popover>
  );
};
