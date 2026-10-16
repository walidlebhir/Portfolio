import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import LanguageProvider from "@/components/i18n";
import AppLoader from "@/components/AppLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Walid Lebhir — Software Engineer",
  description:
    "Portfolio of Walid Lebhir, Computer Engineering Student & Software Engineer passionate about Software Architecture, Backend, DevOps and Artificial Intelligence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-[#030712] dark:text-slate-100">
        <AppLoader />
        <ThemeProvider>
          <LanguageProvider>
            <div className="page-enter flex min-h-full flex-1 flex-col">{children}</div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
