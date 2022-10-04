import clsx from "clsx";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Container } from "./ui/Container";

export const Layout = ({ children }: { children: ReactNode }) => {
  const showSidebar = true;

  return (
    <div className="flex min-h-screen">
      <div id="sidebar" className="flex flex-col">
        <div
          className={clsx(
            "sticky top-0 z-40 h-screen max-w-[60px] overflow-hidden bg-skin-bg transition-all sm:w-auto",
            { "max-w-0 sm:max-w-none": !showSidebar }
          )}
        >
          <Sidebar className="border-r border-skin-border" />
        </div>
      </div>
      <div className="relative flex w-screen min-w-0 shrink-0 flex-col sm:w-auto sm:shrink sm:grow">
        <div
          id="navbar"
          className="sticky top-0 z-40 border-b border-skin-border bg-skin-bg"
        >
          <Navbar />
        </div>
        <div id="content" className="pb-6 pt-4">
          <div>
            <Container>{children}</Container>
          </div>
        </div>
      </div>
    </div>
  );
};
