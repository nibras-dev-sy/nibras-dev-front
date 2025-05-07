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
      <section id="hero" className="h-[700px] bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(25,49,94,0.4)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <img className="absolute inset-0 w-full h-full object-cover opacity-10" src="949f8d8d60-74e9c390c262e1cf69a5.png" alt="abstract digital network lines and nodes, technology background with blue gradient overlay, minimalist tech pattern" />
        </div>

        {/* Content */}
        <div className="container relative mx-auto px-4 z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {dictionary.home.hero.title}
              </h1>
              <p className="text-blue-100 text-lg md:text-xl mt-16 mb-8 max-w-lg mx-auto md:mx-0">
                {dictionary.home.hero.description}
              </p>
              <div className={`flex flex-wrap gap-4 mt-8`}>
                <Link href={`/${lang}/services`} className="bg-white text-blue-700 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300 text-center cursor-pointer whitespace-nowrap inline-block">
                  {dictionary.home.hero.services}
                </Link>
                <Link href={`/${lang}/contact-us`} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition-colors duration-300 text-center cursor-pointer whitespace-nowrap inline-block">
                  {dictionary.home.hero.contact}
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-full h-80 md:h-96 lg:h-[450px] relative">
                <div className="relative z-10 rounded-lg overflow-hidden">
                  <img className="w-full h-auto rounded-lg" src="digital-globe-network.png" alt="Digital globe with network connections and circuit patterns held in hands, representing global technology solutions" />
                </div>
                <div className={`absolute -bottom-4 ${lang === 'ar' ? 'left-4' : 'right-4'} w-24 h-24 bg-blue-500 rounded-lg opacity-50 z-0`}></div>
                <div className={`absolute -top-4 ${lang === 'ar' ? 'right-4' : 'left-4'} w-16 h-16 bg-indigo-600 rounded-lg opacity-50 z-0`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i className="fa-solid fa-chevron-down"></i>
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
