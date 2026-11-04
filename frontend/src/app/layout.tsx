import "@/css/satoshi.css";
import "@/css/style.css";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { AppFrame } from "@/components/AppFrame";

export const metadata: Metadata = {
  title: { template: "%s | Complaint & Appeal Management", default: "Complaint & Appeal Management System" },
  description: "A secure platform for submitting, managing and resolving complaints and appeals.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <AppFrame>{children}</AppFrame>
        </Providers>
      </body>
    </html>
  );
}
