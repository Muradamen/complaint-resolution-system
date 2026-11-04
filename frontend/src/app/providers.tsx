"use client";
import { SidebarProvider } from "@/components/Layouts/sidebar/sidebar-context";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { initI18n } from "@/lib/i18n";
export function Providers({children}:{children:React.ReactNode}){
 const i18n=initI18n();
 useEffect(()=>{const saved=localStorage.getItem("selectedLanguage");if(saved&&i18n.language!==saved)void i18n.changeLanguage(saved);},[i18n]);
 return <ThemeProvider defaultTheme="light" attribute="class"><SidebarProvider>{children}</SidebarProvider></ThemeProvider>;
}
