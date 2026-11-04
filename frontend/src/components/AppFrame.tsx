"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Layouts/sidebar";
import { Header } from "@/components/Layouts/header";
import ProtectedWrapper from "@/components/ProtectedWrapper";
import { LanguageSelector } from "@/components/LanguageSelector";

const publicRoutes = ["/", "/about", "/services", "/contact"];
const authRoutes = ["/auth/sign-in", "/auth/sign-up", "/auth/forgot-password"];

export function AppFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const isPublic = publicRoutes.includes(pathname);
  const isAuth = authRoutes.some((route) => pathname === route || pathname.startsWith(route + "/"));

  if (isPublic || isAuth) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-[#020d1a] dark:text-white">
        {isAuth && <div className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6"><LanguageSelector /></div>}
        {children}
      </div>
    );
  }

  return (
    <ProtectedWrapper>
      <div className="flex min-h-screen bg-gray-2 dark:bg-[#020d1a]">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Header />
          <main className="mx-auto w-full max-w-screen-2xl p-4 md:p-6 2xl:p-8">{children}</main>
        </div>
      </div>
    </ProtectedWrapper>
  );
}
