"use client";
import Signin from "@/components/Auth/Signin";
import { LanguageSelector } from "@/components/LanguageSelector";
import Link from "next/link";
import { ShieldCheck, FileCheck2, Clock3 } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function SignInPage(){
 const {t}=useTranslation();
 return <main className="grid min-h-screen lg:grid-cols-[1.05fr_.95fr]">
  <section className="relative hidden overflow-hidden bg-[#111b35] px-10 py-12 text-white lg:flex lg:flex-col lg:justify-between xl:px-16">
   <div className="absolute -left-32 -top-32 size-[28rem] rounded-full bg-blue-500/20 blur-3xl"/><div className="absolute -bottom-40 -right-20 size-[30rem] rounded-full bg-indigo-500/20 blur-3xl"/>
   <Link href="/" className="relative z-10 flex items-center gap-3"><span className="grid size-11 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20"><FileCheck2 className="size-6"/></span><span className="text-lg font-bold tracking-tight">Complaints & Appeals</span></Link>
   <div className="relative z-10 max-w-xl py-16"><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-blue-100"><ShieldCheck className="size-4"/> {t("secureDigitalService")}</div><h1 className="text-4xl font-bold leading-tight xl:text-5xl">{t("loginHeroTitle")}</h1><p className="mt-5 max-w-lg text-base leading-7 text-slate-300">{t("loginHeroDescription")}</p><div className="mt-10 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-white/10 bg-white/5 p-4"><Clock3 className="mb-3 size-5 text-blue-200"/><p className="font-semibold">{t("transparentTracking")}</p><p className="mt-1 text-sm text-slate-300">{t("transparentTrackingDesc")}</p></div><div className="rounded-2xl border border-white/10 bg-white/5 p-4"><ShieldCheck className="mb-3 size-5 text-blue-200"/><p className="font-semibold">{t("accountableResolution")}</p><p className="mt-1 text-sm text-slate-300">{t("accountableResolutionDesc")}</p></div></div></div>
   <p className="relative z-10 text-xs text-slate-400">© {new Date().getFullYear()} {t("systemName")}</p>
  </section>
  <section className="flex min-h-screen items-center justify-center px-5 py-20 sm:px-10"><div className="w-full max-w-md"><div className="mb-10 lg:hidden"><Link href="/" className="inline-flex items-center gap-3 font-bold"><span className="grid size-10 place-items-center rounded-xl bg-primary text-white"><FileCheck2 className="size-5"/></span> Complaints & Appeals</Link></div><div className="mb-8"><p className="text-sm font-semibold uppercase tracking-[.16em] text-primary">{t("systemName")}</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{t("welcomeBack")}</h2><p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">{t("loginInstruction")}</p></div><Signin/><p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">{t("needHelp")} <Link href="/contact" className="font-semibold text-primary hover:underline">{t("contactSupport")}</Link></p><div className="mt-8 text-center text-xs text-gray-400"><Link href="/" className="hover:text-primary">{t("backToHome")}</Link></div></div></section>
 </main>;
}
