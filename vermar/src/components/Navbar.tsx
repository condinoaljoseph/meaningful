import { Bars2Icon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { useAppStore } from "../store/useAppStore";
import { ButtonTheme } from "./ButtonTheme";
import { NavbarAccount } from "./NavbarAccount";
import { ButtonRounded } from "./ui/ButtonRounded";
import { Container } from "./ui/Container";

export const Navbar = ({ className = "" }: { className?: string }) => {
  const showSidebar = useAppStore((state) => state.showSidebar);
  const setShowSidebar = useAppStore((state) => state.setShowSidebar);

  return (
    <div>
      <Container className={clsx("pl-0 pr-3 sm:!px-4", className)}>
        <div className="flex items-center py-[12px]">
          <div className="ml-3 flex flex-auto items-center">
            <ButtonRounded
              className="sm:hidden"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <Bars2Icon className="w-[1em] h-[1em]" />
            </ButtonRounded>
            <Link href="/">
              <a className="-ml-3 hidden items-center sm:block text-[24px]">
                meaningful
              </a>
            </Link>
          </div>
          <div className="flex space-x-2">
            <NavbarAccount />
            <ButtonTheme />
          </div>
        </div>
      </Container>
    </div>
  );
};
