"use client";

import Logo from "@core/components/logo";
import cn from "@core/utils/class-names";
import Link from "next/link";
import dynamic from "next/dynamic";
import { SidebarMenu } from "./sidebar-menu";
import { PiDotsThreeVerticalBold, PiHeadsetBold } from "react-icons/pi";


import ProfileCardMenu from "../hydrogen/profile-card-menu";
import WorkSpaceSwitcher from "../hydrogen/work-space-switcher";

const NeedSupport = dynamic(() => import("../hydrogen/need-support"), {
  ssr: false,
});

export default function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "fixed bottom-0 start-0 z-50 h-full w-[270px] border-e-2 border-gray-100 bg-white dark:bg-gray-100/50 2xl:w-72",
        className
      )}
    >
      <div className="sticky top-0 z-40 bg-gray-0/10 px-6 pb-5 pt-5 dark:bg-gray-100/5 2xl:px-8 2xl:pt-6">
        <Link
          href={"/"}
          aria-label="Site Logo"
          className="text-gray-800 hover:text-gray-900"
        >
          <Logo className="max-w-[155px]" />  
        </Link>
      </div>

      <WorkSpaceSwitcher
        className="px-6 pb-3.5 pt-3.5"
        suffixClassName="text-gray-500 w-5 h-5"
      />

      <div className="custom-scrollbar overflow-y-auto scroll-smooth h-[calc(100%-80px)]">
        <SidebarMenu />
      </div>
    </aside>

  );
}
