"use client"

import Link from "next/link"
import LanguageSwitcher from "./language-switcher"
import type { Locale } from "@/lib/i18n-config"
import { useState, useEffect } from "react"

export default function Header({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: any
}) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Default switchLabel in case it's missing in the dictionary
  const switchLabel = dictionary.languageSwitcher?.switchTo || ""

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-sky-600`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href={`/${lang}`} className={`font-bold text-xl ${isScrolled ? "text-blue-700" : "text-white"}`}>
            Nibras Dev
          </Link>
        </div>
        <div className="flex gap-6">
          <Link href={`/${lang}`} className={`font-medium ${isScrolled ? "text-gray-800" : "text-white"}`}>
            {dictionary.navigation.home}
          </Link>
          <Link href={`/${lang}/about`} className={`font-medium ${isScrolled ? "text-gray-800" : "text-white"}`}>
            {dictionary.navigation.about}
          </Link>
          <Link href={`/${lang}/contact`} className={`font-medium ${isScrolled ? "text-gray-800" : "text-white"}`}>
            {dictionary.navigation.contact}
          </Link>
        </div>
        <LanguageSwitcher currentLang={lang} switchLabel={switchLabel} />
      </div>
    </header>
  )
}
