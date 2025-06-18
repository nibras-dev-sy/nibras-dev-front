export const i18n = {
  defaultLocale: "ar",
  locales: ["ar", "en"],
}

export const locales = ['ar', 'en'] as const;
export type Locale = typeof locales[number]; // "en" | "ar"