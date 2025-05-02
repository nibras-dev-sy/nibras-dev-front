"use client"

import Link from "next/link"
import LanguageSwitcher from "./language-switcher"
import type { Locale } from "@/lib/i18n-config"
import { useState, useEffect } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: any
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isRTL = lang === "ar"
  const pathname = usePathname()
  
  // Check if we're on home or services page
  const isTransparentHeader = pathname === `/${lang}` || pathname === `/${lang}/services`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Only add scroll listener if we're on home or services page
    if (isTransparentHeader) {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [isTransparentHeader])

  // Default switchLabel in case it's missing in the dictionary
  const switchLabel = dictionary.languageSwitcher?.switchTo || ""

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparentHeader
          ? isScrolled 
            ? "bg-white shadow-md py-2" 
            : "bg-transparent py-4"
          : "bg-white shadow-md py-2"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className={`flex items-center ${isRTL ? "order-last" : "order-first"}`}>
          <Link href={`/${lang}`} className="flex items-center">
            <Image 
              src={isTransparentHeader && !isScrolled ? "/logo1.png" : "/logo2.png"} 
              alt="Logo" 
              width={40} 
              height={40}
              className={isRTL ? "ml-2" : "mr-2"}
            />
            <span className={`font-bold text-xl ${
              isTransparentHeader && !isScrolled ? "text-white" : "text-blue-700"
            }`}>
              Nibras Dev
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center ${isRTL ? "space-x-reverse" : "space-x-1"} ${isRTL ? "order-first" : "order-last"}`}>
          <Link 
            href={`/${lang}`} 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-600 hover:text-white ${
              isTransparentHeader && !isScrolled ? "text-white" : "text-gray-800 hover:text-white"
            }`}
          >
            {dictionary.navigation.home}
          </Link>
          <Link 
            href={`/${lang}/services`} 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-600 hover:text-white ${
              isTransparentHeader && !isScrolled ? "text-white" : "text-gray-800 hover:text-white"
            }`}
          >
            {dictionary.navigation.services}
          </Link>
          <Link 
            href={`/${lang}/about`} 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-600 hover:text-white ${
              isTransparentHeader && !isScrolled ? "text-white" : "text-gray-800 hover:text-white"
            }`}
          >
            {dictionary.navigation.about}
          </Link>
          <Link 
            href={`/${lang}/contact`} 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-600 hover:text-white ${
              isTransparentHeader && !isScrolled ? "text-white" : "text-gray-800 hover:text-white"
            }`}
          >
            {dictionary.navigation.contact}
          </Link>
          <div className={isRTL ? "mr-4" : "ml-4"}>
            <LanguageSwitcher currentLang={lang} switchLabel={switchLabel} />
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className={`inline-flex items-center justify-center p-2 rounded-md ${
              isTransparentHeader && !isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"
            } focus:outline-none`}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            {/* Icon when menu is closed */}
            <svg
              className={`${mobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {/* Icon when menu is open */}
            <svg
              className={`${mobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden bg-white shadow-lg`}
        id="mobile-menu"
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 ${isRTL ? "text-right" : "text-left"}`}>
          <Link
            href={`/${lang}`}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-blue-600 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            {dictionary.navigation.home}
          </Link>
          <Link
            href={`/${lang}/services`}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-blue-600 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            {dictionary.navigation.services}
          </Link>
          <Link
            href={`/${lang}/about`}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-blue-600 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            {dictionary.navigation.about}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-blue-600 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            {dictionary.navigation.contact}
          </Link>
          <div className="px-3 py-2">
            <LanguageSwitcher currentLang={lang} switchLabel={switchLabel} />
          </div>
        </div>
      </div>
    </header>
  )
}
