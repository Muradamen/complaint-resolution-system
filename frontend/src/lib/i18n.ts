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
      usernameOrEmail: "Username or email", usernameOrEmailPlaceholder: "Enter your username or email", password: "Password", passwordPlaceholder: "Enter your password", forgotPassword: "Forgot password?", signingIn: "Signing in…", invalidCredentials: "Your username or password is incorrect.", profileVerificationFailed: "We could not verify your account. Please try again.", loginFailed: "Unable to sign in. Please try again.", showPassword: "Show password", hidePassword: "Hide password", secureAccessNotice: "Never share your password with anyone.",
      secureDigitalService: "Secure digital public service", loginHeroTitle: "Your work. Your cases. One trusted platform.", loginHeroDescription: "Access the complaint and appeal workspace to review submissions, coordinate action and follow cases through resolution.", transparentTracking: "Transparent tracking", transparentTrackingDesc: "Follow case progress and important updates.", accountableResolution: "Accountable resolution", accountableResolutionDesc: "Support clear ownership and timely action.", systemName: "Complaint & Appeal Management System", welcomeBack: "Welcome back", loginInstruction: "Sign in using the account provided by your organization.", needHelp: "Need assistance?", contactSupport: "Contact support", backToHome: "Back to home",
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
      usernameOrEmail: "የተጠቃሚ ስም ወይም ኢሜይል", usernameOrEmailPlaceholder: "የተጠቃሚ ስም ወይም ኢሜይል ያስገቡ", password: "የይለፍ ቃል", passwordPlaceholder: "የይለፍ ቃል ያስገቡ", forgotPassword: "የይለፍ ቃል ረሱ?", signingIn: "በመግባት ላይ…", invalidCredentials: "የተጠቃሚ ስም ወይም የይለፍ ቃል ትክክል አይደለም።", profileVerificationFailed: "መለያዎን ማረጋገጥ አልተቻለም። እንደገና ይሞክሩ።", loginFailed: "መግባት አልተቻለም። እንደገና ይሞክሩ።", showPassword: "የይለፍ ቃል አሳይ", hidePassword: "የይለፍ ቃል ደብቅ", secureAccessNotice: "የይለፍ ቃልዎን ለማንም አያጋሩ።",
      secureDigitalService: "ደህንነቱ የተጠበቀ ዲጂታል አገልግሎት", loginHeroTitle: "ስራዎ። ጉዳዮችዎ። በአንድ የታመነ መድረክ።", loginHeroDescription: "ቅሬታዎችንና ይግባኞችን ለመመርመር፣ እርምጃዎችን ለማስተባበር እና እስከ መፍትሄ ድረስ ለመከታተል ይግቡ።", transparentTracking: "ግልጽ ክትትል", transparentTrackingDesc: "የጉዳዮችን ሂደትና ዝማኔዎች ይከታተሉ።", accountableResolution: "ተጠያቂነት ያለው መፍትሄ", accountableResolutionDesc: "ግልጽ ኃላፊነትንና በወቅቱ እርምጃን ያግዙ።", systemName: "የቅሬታና ይግባኝ አስተዳደር ስርዓት", welcomeBack: "እንኳን ደህና መጡ", loginInstruction: "በድርጅትዎ የተሰጠዎትን መለያ በመጠቀም ይግቡ።", needHelp: "እርዳታ ይፈልጋሉ?", contactSupport: "ድጋፍን ያግኙ", backToHome: "ወደ መነሻ ተመለስ",
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
      usernameOrEmail: "Maqaa fayyadamaa ykn imeelii", usernameOrEmailPlaceholder: "Maqaa fayyadamaa ykn imeelii galchi", password: "Jecha icciitii", passwordPlaceholder: "Jecha icciitii galchi", forgotPassword: "Jecha icciitii irraanfatte?", signingIn: "Seenaa jira…", invalidCredentials: "Maqaan fayyadamaa ykn jechi icciitii sirrii miti.", profileVerificationFailed: "Herrega kee mirkaneessuu hin dandeenye. Irra deebi'ii yaali.", loginFailed: "Seenuun hin danda'amne. Irra deebi'ii yaali.", showPassword: "Jecha icciitii agarsiisi", hidePassword: "Jecha icciitii dhoksi", secureAccessNotice: "Jecha icciitii kee nama kamiifuu hin qoodin.",
      secureDigitalService: "Tajaajila mootummaa dijitaalaa nageenya qabu", loginHeroTitle: "Hojii kee. Dhimmoota kee. Waltajjii amanamaa tokko.", loginHeroDescription: "Komii fi iyyannoo ilaaluuf, hojii qindeessuuf, akkasumas dhimmoota hanga furmaataatti hordofuuf seeni.", transparentTracking: "Hordoffii ifa ta'e", transparentTrackingDesc: "Adeemsa dhimmootaa fi odeeffannoo haaraa hordofi.", accountableResolution: "Furmaata itti gaafatamummaa qabu", accountableResolutionDesc: "Abbummaa ifaa fi tarkaanfii yeroo isaa eeggate deeggaru.", systemName: "Sirna Bulchiinsa Komii fi Iyyannoo", welcomeBack: "Baga nagaan deebite", loginInstruction: "Herrega dhaabbanni kee siif kenne fayyadamuun seeni.", needHelp: "Gargaarsa barbaaddaa?", contactSupport: "Deeggarsa qunnami", backToHome: "Gara fuula jalqabaatti deebi'i",
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
