"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"

export default function LanguageSwitcher({
  currentLang,
  switchLabel,
}: {
  currentLang: string
  switchLabel: string
}) {
  const pathName = usePathname()
  const router = useRouter()

  const redirectedPathName = useCallback(
    (locale: string) => {
      if (!pathName) return "/"

      const segments = pathName.split("/")
      segments[1] = locale

      return segments.join("/")
    },
    [pathName],
  )

  const otherLang = currentLang === "en" ? "ar" : "en"
  const otherLangName = currentLang === "en" ? "العربية" : "English"

  return (
    <Button
      variant="outline"
      onClick={() => router.push(redirectedPathName(otherLang))}
      className={`rounded-full flex items-center justify-center text-sm px-4 py-1 transition-colors duration-200 border 
        ${currentLang === "ar" ? "flex-row-reverse" : ""}
      `}
      size="sm"
    >
      <span className="flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className={`w-4 h-4 ${currentLang === "ar" ? "ml-1.5" : "mr-1.5"}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        {otherLangName}
      </span>
    </Button>
  )
}
