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
      title: 'تطوير الويب والتطبيقات الاحترافية',
      description: 'تحويل أفكار الأعمال إلى واقع رقمي مع تطوير ويب متطور، وتطبيقات جوالة، وحلول برمجية مخصصة مصممة للنمو.',
      keywords: ['تطوير الويب', 'تطوير تطبيقات الجوال', 'برمجيات مخصصة', 'تصميم متجاوب', 'تصميم واجهة المستخدم', 'مواقع الأعمال', 'حلول التجارة الإلكترونية', 'التحول الرقمي'],
      alternates: {
        canonical: `/${lang}`,
        languages: {
          'en': '/en',
          'ar': '/ar',
        },
      },
      openGraph: {
        title: "نبراس ديف | حول أعمالك مع الحلول الرقمية",
        description: "خدمات تطوير ويب وجوال احترافية تدفع نمو الأعمال من خلال التصميم المبتكر والأداء الاستثنائي.",
        url: `https://nibrasdev.com/${lang}`,
        images: [
          {
            url: '/og-home.jpg',
            width: 1200,
            height: 630,
            alt: 'نبراس ديف - تطوير الويب والجوال',
          },
        ],
        type: 'website',
      },
    }
  }
  
  // English metadata
  return {
    title: 'Professional Web & Mobile Development',
    description: 'Transforming business ideas into digital reality with cutting-edge web development, mobile applications, and custom software solutions designed for growth.',
    keywords: ['web development', 'mobile app development', 'custom software', 'responsive design', 'UI/UX design', 'business websites', 'e-commerce solutions', 'digital transformation'],
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'ar': '/ar',
      },
    },
    openGraph: {
      title: "Nibras Dev | Transform Your Business with Digital Solutions",
      description: "Professional web and mobile development services that drive business growth through innovative design and exceptional performance.",
      url: `https://nibrasdev.com/${lang}`,
      images: [
        {
          url: '/og-home.jpg',
          width: 1200,
          height: 630,
          alt: 'Nibras Dev - Web & Mobile Development',
        },
      ],
      type: 'website',
    },
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
          <p className="text-blue-100 text-lg md:text-2xl max-w-2xl mb-10">
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

      {/* Stats Section */}
      <section id="stats-section" className="bg-white py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div id="stat-1" className="text-center">
              <div className="text-blue-600 text-4xl font-bold mb-2">3+</div>
              <div className="text-gray-600">{dictionary.home.stats.experience}</div>
            </div>
            <div id="stat-2" className="text-center">
              <div className="text-blue-600 text-4xl font-bold mb-2">5+</div>
              <div className="text-gray-600">{dictionary.home.stats.projects}</div>
            </div>
            <div id="stat-3" className="text-center">
              <div className="text-blue-600 text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-600">{dictionary.home.stats.team}</div>
            </div>
            <div id="stat-4" className="text-center">
              <div className="text-blue-600 text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-600">{dictionary.home.stats.satisfaction}</div>
            </div>
          </div>
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
            <span className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
              {dictionary.home.services.viewDetails}
            </span>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-section" className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <img className="w-full rounded-lg shadow-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3a8ca0f87d-d384dfbf48cdd1ea06dc.png" alt="modern tech office" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{dictionary.home.about.title}</h2>
              <p className="text-gray-600 mb-6">{dictionary.home.about.description1}</p>
              <p className="text-gray-600 mb-8">{dictionary.home.about.description2}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                {dictionary.home.about.tags.map((tag: string, index: number) => (
                  <div key={index} className="bg-blue-50 px-4 py-2 rounded-md">
                    <span className="text-blue-600 font-medium">{tag}</span>
                  </div>
                ))}
              </div>
              <span className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                {dictionary.home.about.learnMore}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
