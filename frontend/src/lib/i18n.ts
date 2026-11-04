import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      signIn: "Sign In",
      signUp: "Sign Up",
      dashboard: "Dashboard",
      role: "Role",
      search: "Search",
      WORKSPACE: "Workspace", ADMINISTRATION: "Administration", ACCOUNT: "Account", "Complaints & Appeals": "Complaints & Appeals", "My Assigned Cases": "My Assigned Cases", "Case Activity": "Case Activity", Users: "Users", Offices: "Offices", "Roles & Permissions": "Roles & Permissions", Reports: "Reports", Announcements: "Announcements", "My Profile": "My Profile", Settings: "Settings",
      fasterWayToHandle: "A faster way to handle",
      complaintsAndAppealsText: "complaints & appeals",
      paperProcessesModernized:
        "Paper processes—modernized. Submit, track, transfer, and resolve cases across offices with clear accountability and timely reports.",
      getStarted: "Get Started",
      learnMore: "Learn More",
    },
  },
  am: {
    translation: {
      home: "የመነሻ ገጽ",
      about: "ስለ",
      services: "አገልግሎቶች",
      contact: "አድራሻ",
      signIn: "ግባ",
      signUp: "ይመዝገቡ",
      dashboard: "ዳሽቦርድ",
      role: "ሚና",
      search: "ፈልግ",
      WORKSPACE: "የሥራ ቦታ", ADMINISTRATION: "አስተዳደር", ACCOUNT: "መለያ", "Complaints & Appeals": "ቅሬታዎችና ይግባኞች", "My Assigned Cases": "የተመደቡልኝ ጉዳዮች", "Case Activity": "የጉዳይ እንቅስቃሴ", Users: "ተጠቃሚዎች", Offices: "ቢሮዎች", "Roles & Permissions": "ሚናዎችና ፈቃዶች", Reports: "ሪፖርቶች", Announcements: "ማስታወቂያዎች", "My Profile": "የግል መረጃ", Settings: "ቅንብሮች",
      fasterWayToHandle: "የማስተናገድ ፈጣን መንገድ",
      complaintsAndAppealsText: "ያሰተላለፉ እና ጥያቄዎች",
      paperProcessesModernized:
        "የወረቀት ሂደቶች—ዘመናዊ ሆነው። ጉዳዮችን በግልጽ ኃላፊነት እና በወቅቱ ሪፖርቶች በተለያዩ ጽህፈት ቤቶች ያስገቡ፣ ያሳዩ፣ ያዛውሩ እና ያፈቱ።",
      getStarted: "ጀምር",
      learnMore: "ተጨማሪ ይወቁ",
    },
  },
  ha: {
    translation: {
      home: "የመነሻ ገጽ",
      about: "ስለ",
      services: "አገልግሎቶች",
      contact: "አድራሻ",
      signIn: "ግባ",
      signUp: "ይመዝገቡ",
      dashboard: "ዳሽቦርድ",
      role: "ሚና",
      search: "ፈልግ",
      fasterWayToHandle: "የማስተናገድ ፈጣን መንገድ",
      complaintsAndAppealsText: "ያሰተላለፉ እና ጥያቄዎች",
      paperProcessesModernized:
        "የወረቀት ሂደቶች—ዘመናዊ ሆነው። ጉዳዮችን በግልጽ ኃላፊነት እና በወቅቱ ሪፖርቶች በተለያዩ ጽህፈት ቤቶች ያስገቡ፣ ያሳዩ፣ ያዛውሩ እና ያፈቱ።",
      getStarted: "ጀምር",
      learnMore: "ተጨማሪ ይወቁ",
    },
  },
  om: {
    translation: {
      home: "Mana",
      about: "Waa'ee",
      services: "Tajaajiloota",
      contact: "Quunnamtii",
      signIn: "Seeni",
      signUp: "Galmaa'i",
      dashboard: "Daashboordii",
      role: "Gahee",
      search: "Barbaadi",
      WORKSPACE: "Iddoo hojii", ADMINISTRATION: "Bulchiinsa", ACCOUNT: "Herrega", "Complaints & Appeals": "Komii fi iyyannoo", "My Assigned Cases": "Dhimmoota naaf ramadaman", "Case Activity": "Sochii dhimmaa", Users: "Fayyadamtoota", Offices: "Waajjiraalee", "Roles & Permissions": "Gahee fi hayyama", Reports: "Gabaasa", Announcements: "Beeksisa", "My Profile": "Odeeffannoo koo", Settings: "Qindaa ina",
      fasterWayToHandle: "Too'achuu karaa saffisaa",
      complaintsAndAppealsText: "komii fi iyyannoo",
      paperProcessesModernized:
        "Adeemsi gabatee waraaqaa haalaan taasifame. Dhimmoota galmeessi, hordofi, dabarsi, fi baji'aa gabaasa yeroon waliin furadhu.",
      getStarted: "Jalqabi",
      learnMore: "Dabalata baradhu",
    },
  },
};

export function initI18n() {
  if (!i18n.isInitialized) {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources,
        fallbackLng: "en",
        supportedLngs: ["en", "am", "om"],
        interpolation: { escapeValue: false },
        detection: {
          order: ["localStorage", "navigator", "htmlTag"],
          caches: ["localStorage"],
          lookupLocalStorage: "selectedLanguage",
        },
      });
  }
  return i18n;
}
