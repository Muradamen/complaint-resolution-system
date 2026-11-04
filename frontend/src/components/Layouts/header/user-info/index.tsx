"use client";
import { ChevronUpIcon } from "@/assets/icons";
import { Dropdown, DropdownContent, DropdownTrigger } from "@/components/ui/dropdown";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogOutIcon, SettingsIcon, UserIcon } from "./icons";
export function UserInfo(){
 const [isOpen,setIsOpen]=useState(false);const {user}=useCurrentUser();const router=useRouter();
 const name=user?.name||"Account";const email=user?.email||"";
 function signOut(){localStorage.removeItem("token");localStorage.removeItem("access");localStorage.removeItem("refresh");sessionStorage.clear();setIsOpen(false);router.replace("/auth/sign-in");router.refresh();}
 return <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
  <DropdownTrigger className="rounded align-middle outline-none ring-primary ring-offset-2 focus-visible:ring-1 dark:ring-offset-gray-dark"><span className="sr-only">My account</span><figure className="flex items-center gap-2"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">{name.slice(0,1).toUpperCase()}</span><figcaption className="flex max-w-36 items-center gap-1 truncate text-sm font-medium text-dark dark:text-dark-6 max-[1024px]:sr-only"><span className="truncate">{name}</span><ChevronUpIcon aria-hidden className={cn("size-4 rotate-180 transition-transform",isOpen&&"rotate-0")} strokeWidth={1.5}/></figcaption></figure></DropdownTrigger>
  <DropdownContent className="min-w-[16rem] border border-stroke bg-white shadow-md dark:border-dark-3 dark:bg-gray-dark" align="end">
   <div className="px-4 py-3"><p className="truncate text-sm font-semibold text-dark dark:text-white">{name}</p>{email&&<p className="mt-1 truncate text-xs text-gray-500">{email}</p>}</div><hr className="border-[#E8E8E8] dark:border-dark-3"/>
   <div className="p-2 text-sm text-gray-600 dark:text-dark-6">
    <Link href="/profile" onClick={()=>setIsOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-2 dark:hover:bg-dark-3"><UserIcon/><span>My profile</span></Link>
    <Link href="/pages/settings" onClick={()=>setIsOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-2 dark:hover:bg-dark-3"><SettingsIcon/><span>Settings</span></Link>
    <button onClick={signOut} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"><LogOutIcon/><span>Sign out</span></button>
   </div>
  </DropdownContent>
 </Dropdown>;
}
