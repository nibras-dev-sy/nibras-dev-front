"use client"

import Link from "next/link"
import Image from "next/image"
import type { Locale } from "@/lib/i18n-config"

export default function Footer({
  lang,
  dictionary,
}: {
  lang: Locale
  dictionary: any
}) {
  const isRTL = lang === "ar"
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ${isRTL ? "text-right" : "text-left"}`}>
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Image 
                src="/logo2.png"
                alt="Logo"
                width={40}
                height={40}
                className={isRTL ? "ml-3" : "mr-3"}
              />
              <span className="text-white font-bold text-xl">{dictionary.navigation.title}</span>
            </div>
            <p className="text-gray-400 mb-6">
              {dictionary.footer.about}
            </p>
            <div className={`flex space-x-4`}>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{dictionary.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {dictionary.navigation.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {dictionary.navigation.services}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {dictionary.navigation.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {dictionary.navigation.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{dictionary.footer.services}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/services#web-development`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {dictionary.footer.webDev}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services#mobile-development`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {dictionary.footer.mobileDev}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services#ui-ux-design`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {dictionary.footer.uiUx}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/services#cloud-services`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {dictionary.footer.cloud}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">{dictionary.footer.contact}</h3>
            <ul className="space-y-3">
              <li className={`flex items-start gap-3`}>
                <i className={`fas fa-phone mt-1.5 ${isRTL ? "ml-3" : "mr-3"} text-blue-500`}></i>
                <span dir="ltr">{dictionary.footer.phone}</span>
              </li>
              <li className={`flex items-start gap-3`}>
                <i className={`fas fa-phone mt-1.5 ${isRTL ? "ml-3" : "mr-3"} text-blue-500`}></i>
                <span dir="ltr">{dictionary.footer.phone1}</span>
              </li>
              <li className={`flex items-start gap-3`}>
                <i className={`fas fa-envelope mt-1.5 ${isRTL ? "ml-3" : "mr-3"} text-blue-500`}></i>
                <span>{dictionary.footer.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center`}>
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Nibras Dev. {dictionary.footer.rights}
            </p>
            <div className={`flex space-x-4`}>
              <Link href={`/${lang}/privacy`} className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                {dictionary.footer.privacy}
              </Link>
              <Link href={`/${lang}/terms`} className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                {dictionary.footer.terms}
              </Link>
              <Link href={`/${lang}/cookies`} className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                {dictionary.footer.cookies}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
