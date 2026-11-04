"use client";
import { SearchIcon } from "@/assets/icons";
import Link from "next/link";
import { useSidebarContext } from "../sidebar/sidebar-context";
import { MenuIcon } from "./icons";
import { Notification } from "./notification";
import { ThemeToggleSwitch } from "./theme-toggle";
import { UserInfo } from "./user-info";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useTranslation } from "react-i18next";
export function Header(){
 const {toggleSidebar,isMobile}=useSidebarContext(); const {t}=useTranslation();
 return <header className="sticky top-0 z-30 flex min-h-[76px] items-center justify-between gap-3 border-b border-stroke bg-white px-4 py-3 shadow-1 dark:border-stroke-dark dark:bg-gray-dark md:px-6">
  <div className="flex min-w-0 items-center gap-3"><button onClick={toggleSidebar} className="rounded-lg border p-2 dark:border-stroke-dark lg:hidden" aria-label="Toggle navigation"><MenuIcon /></button>{isMobile&&<Link href="/" className="truncate text-sm font-bold text-dark dark:text-white">Complaints & Appeals</Link>}<div className="hidden min-w-0 sm:block"><h1 className="truncate text-lg font-bold text-dark dark:text-white">{t("dashboard")}</h1><p className="text-xs text-gray-500">Complaint & Appeal Management System</p></div></div>
  <div className="flex shrink-0 items-center gap-2 sm:gap-3"><div className="relative hidden w-52 lg:block"><input type="search" placeholder={t("search")} aria-label={t("search")} className="w-full rounded-full border bg-gray-2 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2" /><SearchIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4" /></div><LanguageSelector /><ThemeToggleSwitch /><Notification /><UserInfo /></div>
 </header>;
}
