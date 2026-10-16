"use client";

import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./i18n";

export default function Contact() {
  const { t, lang } = useLanguage();

  const channels = [
    {
      icon: Mail,
      label: t("about.email"),
      value: "walidelbhir@gmail.com",
      href: "mailto:walidelbhir@gmail.com",
    },
    {
      icon: Phone,
      label: t("about.phone"),
      value: "0704213771",
      href: "tel:+212704213771",
    },
    {
      icon: MapPin,
      label: t("about.location"),
      value: lang === "fr" ? "Kénitra, Maroc" : "Kénitra, Morocco",
      href: undefined as string | undefined,
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0066ff] dark:text-[#3b82f6]">
          {t("contact.kicker")}
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          {t("contact.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
          {t("contact.sub")}
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
          {channels.map((channel) => {
            const inner = (
              <>
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066ff] shadow-lg shadow-blue-600/30">
                  <channel.icon className="h-5 w-5 text-white" />
                </span>
                <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {channel.label}
                </span>
                <span className="mt-1 flex items-center justify-center gap-1 break-all text-sm font-medium text-slate-800 dark:text-slate-200">
                  {channel.value}
                  {channel.href && (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                  )}
                </span>
              </>
            );
            const cardClass =
              "glass-card rounded-2xl border border-slate-200 p-6 shadow-lg shadow-slate-200/60 transition-all hover:-translate-y-1 hover:border-blue-500/50 dark:border-slate-800 dark:shadow-black/20";
            return channel.href ? (
              <a key={channel.label} href={channel.href} className={cardClass}>
                {inner}
              </a>
            ) : (
              <div key={channel.label} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>

        <a
          href="mailto:walidelbhir@gmail.com"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0066ff] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
        >
          <Mail className="h-4 w-4" />
          {t("contact.hello")}
        </a>
      </div>
    </section>
  );
}
