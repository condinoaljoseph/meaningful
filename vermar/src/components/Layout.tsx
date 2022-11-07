import clsx from "clsx";
import Head from "next/head";
import { ReactNode } from "react";
import { useAppStore } from "../store/useAppStore";
import { FlashNotifications } from "./FlashNotifications";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Container } from "./ui/Container";

export const Layout = ({ children }: { children: ReactNode }) => {
  const showSidebar = useAppStore((state) => state.showSidebar);
  const setShowSidebar = useAppStore((state) => state.setShowSidebar);

  return (
    <>
      <Head>
        <title>Meaningful Codes</title>
      </Head>
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
            className={clsx(
              "absolute top-0 right-0 left-0 bottom-0 z-50 bg-skin-bg opacity-60",
              { hidden: !showSidebar }
            )}
            onClick={() => setShowSidebar(false)}
          />
          <div
            id="navbar"
            className="sticky top-0 z-40 border-b border-skin-border bg-skin-bg"
          >
            <Navbar />
          </div>
          <div id="content" className="pb-6 pt-4">
            <Container>{children}</Container>
          </div>
        </div>
      </div>
      <FlashNotifications />
    </>
  );
};
