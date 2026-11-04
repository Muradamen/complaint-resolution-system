"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
const API_URL=(process.env.NEXT_PUBLIC_API_URL||"http://localhost:8000/api").replace(/\/$/,"");
export default function ProtectedWrapper({children}:{children:React.ReactNode}){
 const router=useRouter(); const pathname=usePathname(); const [ready,setReady]=useState(false); const [allowed,setAllowed]=useState(false);
 useEffect(()=>{let active=true; const token=localStorage.getItem("token")||localStorage.getItem("access");
  if(!token){router.replace("/auth/sign-in");return;}
  fetch(`${API_URL}/auth/me/`,{headers:{Authorization:`Bearer ${token}`},cache:"no-store"})
   .then(res=>{if(!res.ok)throw new Error("Session expired");return res.json();})
   .then(()=>{if(active){setAllowed(true);setReady(true);}})
   .catch(()=>{localStorage.removeItem("token");localStorage.removeItem("access");localStorage.removeItem("refresh");if(active){setAllowed(false);setReady(true);router.replace("/auth/sign-in?next="+encodeURIComponent(pathname||"/dashboard"));}})
  return()=>{active=false;};
 },[router,pathname]);
 if(!ready||!allowed)return <div className="flex min-h-screen items-center justify-center text-sm text-gray-500">Checking your secure session…</div>;
 return <>{children}</>;
}
