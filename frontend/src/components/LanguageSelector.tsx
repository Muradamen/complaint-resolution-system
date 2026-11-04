"use client";

import { useEffect, useState } from "react";
import i18n from "i18next";
import { ChevronDown, Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "am", label: "Amharic", native: "አማርኛ" },
  { code: "om", label: "Afaan Oromoo", native: "Afaan Oromoo" },
];

export function LanguageSelector() {
  const [language, setLanguage] = useState("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("selectedLanguage") || i18n.language || "en";
    setLanguage(languages.some((item) => item.code === saved) ? saved : "en");
  }, []);

  async function selectLanguage(code: string) {
    setLanguage(code);
    localStorage.setItem("selectedLanguage", code);
    await i18n.changeLanguage(code);
    document.documentElement.lang = code;
    setOpen(false);
  }

  const current = languages.find((item) => item.code === language) || languages[0];

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((value) => !value)} aria-haspopup="listbox" aria-expanded={open} className="inline-flex h-10 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
        <Globe className="size-4" /><span>{current.native}</span><ChevronDown className="size-4" />
      </button>
      {open && <div role="listbox" aria-label="Select language" className="absolute right-0 z-[100] mt-2 min-w-44 overflow-hidden rounded-xl border border-gray-200 bg-white p-1 shadow-xl dark:border-gray-700 dark:bg-gray-900">
        {languages.map((item) => <button key={item.code} type="button" role="option" aria-selected={language === item.code} onClick={() => void selectLanguage(item.code)} className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800">
          <span><span className="block font-medium">{item.native}</span><span className="text-xs text-gray-500">{item.label}</span></span>
          {language === item.code && <span className="size-2 rounded-full bg-primary" />}
        </button>)}
      </div>}
    </div>
  );
}
