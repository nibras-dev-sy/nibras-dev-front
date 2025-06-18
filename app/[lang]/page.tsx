import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/i18n-config"
import Image from "next/image"
import type { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stars: number;
}

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { lang } = await params
  const dictionary = await getDictionary(lang as Locale)
  
  // Arabic metadata
  if (lang === 'ar') {
    return {
      title: 'نبراس لتكنولوجيا الأعمال',
      description: 'نبني حلول برمجية مبتكرة تدفع نمو الأعمال وتقدم تجربة مستخدم استثنائية من أنظمة ERP وCRM والتطبيقات المتكاملة إلى تنفيذ البنية التحتية الرقمية للشركات.',
    }
  }
  
  // English metadata
  return {
    title: 'Nibras Enterprise Technologies',
    description: 'We build innovative software solutions that drive business growth and deliver exceptional user experiences from ERP and CRM systems to integrated applications to implementing the digital infrastructure of companies.',
  }
}

export default async function Home({
  params,
}: {
  params: any
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="relative flex items-center justify-center min-h-[700px] bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        {/* Animated SVG/Tech Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="techGradient" x1="0" y1="0" x2="1200" y2="700" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2563eb" />
                <stop offset="1" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <rect width="1200" height="700" fill="url(#techGradient)" opacity="0.2" />
            <g opacity="0.3">
              <circle cx="300" cy="200" r="120" fill="#38bdf8" />
              <circle cx="1000" cy="600" r="180" fill="#818cf8" />
              <circle cx="900" cy="100" r="80" fill="#0ea5e9" />
            </g>
            <g stroke="#fff" strokeWidth="1.5" opacity="0.12">
              <path d="M0 350h1200" />
              <path d="M600 0v700" />
              <path d="M200 0l800 700" />
              <path d="M1000 0L200 700" />
            </g>
          </svg>
        </div>
        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-24 flex flex-col items-center text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            {dictionary.home.hero.title}
          </h1>
          <p className="text-blue-100 text-lg md:text-2xl max-w-2xl mb-10 mt-10">
            {dictionary.home.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${lang}/services`} className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-50 transition-colors duration-300 text-center cursor-pointer whitespace-nowrap">
              {dictionary.home.hero.services}
            </Link>
            <Link href={`/${lang}/contact`} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300 text-center cursor-pointer whitespace-nowrap">
              {dictionary.home.hero.contact}
            </Link>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{dictionary.home.services.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{dictionary.home.services.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div id="service-card-1" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fa-solid fa-globe text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{dictionary.home.services.business.title}</h3>
              <p className="text-gray-600 mb-6">{dictionary.home.services.business.description}</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {dictionary.home.services.business.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <i className="fa-solid fa-check text-blue-600 mr-2"></i>{feature}
                  </li>
                ))}
              </ul>
              <span className="text-blue-600 font-medium flex items-center cursor-pointer">
                {dictionary.home.services.learnMore} <i className="fa-solid fa-arrow-right ml-2"></i>
              </span>
            </div>

            <div id="service-card-2" className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fa-solid fa-shop text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{dictionary.home.services.ecommerce.title}</h3>
              <p className="text-gray-600 mb-6">{dictionary.home.services.ecommerce.description}</p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {dictionary.home.services.ecommerce.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <i className="fa-solid fa-check text-blue-600 mr-2"></i>{feature}
                  </li>
                ))}
              </ul>
              <span className="text-blue-600 font-medium flex items-center cursor-pointer">
                {dictionary.home.services.learnMore} <i className="fa-solid fa-arrow-right ml-2"></i>
              </span>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href={`/${lang}/services`} className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
              {dictionary.home.services.viewDetails}
            </a>
          </div>
        </div>
      </section>

      
      {/* Development Process */}
      <section id="development-process" className="bg-blue-700 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {dictionary.services.process.title}
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              {dictionary.services.process.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dictionary.services.process.steps.map((step: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 relative">
                  <span className="text-blue-700 font-bold text-xl">{step.number}</span>
                  {index < 3 && (
                    <div className="absolute h-1 bg-blue-100 w-full right-0 top-1/2 transform translate-x-full -z-10 hidden lg:block"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
