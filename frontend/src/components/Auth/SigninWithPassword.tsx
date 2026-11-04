"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LockKeyhole, Mail, LoaderCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { defaultRouteForRole } from "@/lib/role";
const API_URL=(process.env.NEXT_PUBLIC_API_URL||"http://localhost:8000/api").replace(/\/$/,"");
export default function SigninWithPassword(){
 const router=useRouter(); const {t}=useTranslation(); const [identifier,setIdentifier]=useState(""); const [password,setPassword]=useState(""); const [showPassword,setShowPassword]=useState(false); const [loading,setLoading]=useState(false); const [error,setError]=useState("");
 async function handleSubmit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();setError("");setLoading(true);
  try{
   const response=await fetch(`${API_URL}/login/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:identifier.trim(),password})});
   const payload=await response.json().catch(()=>({}));
   if(!response.ok||!payload.access)throw new Error(payload.detail||payload.error||t("invalidCredentials"));
   const profileResponse=await fetch(`${API_URL}/auth/me/`,{headers:{Authorization:`Bearer ${payload.access}`},cache:"no-store"});
   if(!profileResponse.ok)throw new Error(t("profileVerificationFailed"));
   const profile=await profileResponse.json();
   localStorage.setItem("token",payload.access);localStorage.setItem("access",payload.access);
   if(payload.refresh)localStorage.setItem("refresh",payload.refresh);
   const role=profile.user_groups?.[0]||payload.role||"Citizen";
   router.replace(defaultRouteForRole(role));router.refresh();
  }catch(err){setError(err instanceof Error?err.message:t("loginFailed"));}
  finally{setLoading(false);}
 }
 return <form onSubmit={handleSubmit} className="w-full space-y-5">
  <div><label htmlFor="identifier" className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-100">{t("usernameOrEmail")}</label><div className="relative"><Mail className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400"/><input id="identifier" name="identifier" autoComplete="username" required value={identifier} onChange={e=>setIdentifier(e.target.value)} placeholder={t("usernameOrEmailPlaceholder")} className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-gray-700 dark:bg-gray-900"/></div></div>
  <div><label htmlFor="password" className="mb-2 block text-sm font-semibold text-gray-800 dark:text-gray-100">{t("password")}</label><div className="relative"><LockKeyhole className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400"/><input id="password" name="password" type={showPassword?"text":"password"} autoComplete="current-password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder={t("passwordPlaceholder")} className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-12 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-gray-700 dark:bg-gray-900"/><button type="button" onClick={()=>setShowPassword(v=>!v)} aria-label={showPassword?t("hidePassword"):t("showPassword")} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">{showPassword?<EyeOff className="size-4"/>:<Eye className="size-4"/>}</button></div></div>
  <div className="flex justify-end"><a href="/auth/forgot-password" className="text-sm font-semibold text-primary hover:underline">{t("forgotPassword")}</a></div>
  {error&&<div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">{error}</div>}
  <button type="submit" disabled={loading} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 font-semibold text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60">{loading&&<LoaderCircle className="size-5 animate-spin"/>}{loading?t("signingIn"):t("signIn")}</button>
  <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">{t("secureAccessNotice")}</p>
 </form>;
}
