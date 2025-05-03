import type React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/i18n-config"
import Header from "@/components/header"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"
import { Inter, Cairo } from "next/font/google"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export async function generateMetadata(
  { params }: { params: any  }
): Promise<Metadata> {
  const { lang } = await params

  return {
    metadataBase: new URL('https://nibrasdev.com'),
    title: {
      default: "Nibras Dev | Web & Mobile Development",
      template: "%s | Nibras Dev"
    },
    description: "Professional web and mobile development services for businesses worldwide. Custom solutions, modern design, and exceptional performance.",
    keywords: ["web development", "mobile development", "custom software", "UI/UX design", "responsive design", "business websites", "e-commerce"],
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'ar': '/ar',
      },
    },
    openGraph: {
      title: "Nibras Dev | Web & Mobile Development",
      description: "Professional web and mobile development services for businesses worldwide.",
      url: 'https://nibrasdev.com',
      siteName: 'Nibras Dev',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Nibras Dev - Web & Mobile Development',
        },
      ],
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Nibras Dev | Web & Mobile Development",
      description: "Professional web and mobile development services for businesses worldwide.",
      images: ['/twitter-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: any
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const dir = lang === "ar" ? "rtl" : "ltr"

  // Update HTML attributes
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }

  return (
    <html lang={lang} dir={dir} className={`${inter.variable} ${cairo.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="alternate" href={`https://nibrasdev.com/en`} hrefLang="en" />
        <link rel="alternate" href={`https://nibrasdev.com/ar`} hrefLang="ar" />
        <link rel="alternate" href={`https://nibrasdev.com`} hrefLang="x-default" />
      </head>
      <body className={`min-h-screen flex flex-col ${lang === "ar" ? "font-arabic" : "font-sans"}`}>
        <StructuredData />
        <Header lang={lang} dictionary={dictionary} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} dictionary={dictionary} />
      </body>
    </html>
  )
}
