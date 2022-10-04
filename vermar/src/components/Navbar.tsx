import clsx from "clsx";
import Link from "next/link";
import { ButtonTheme } from "./ButtonTheme";
import { NavbarAccount } from "./NavbarAccount";
import { Container } from "./ui/Container";

export const Navbar = ({ className = "" }: { className?: string }) => {
  return (
    <div>
      <Container className={clsx("pl-0 pr-3 sm:!px-4", className)}>
        <div className="flex items-center py-[12px]">
          <div className="ml-3 flex flex-auto items-center">
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
