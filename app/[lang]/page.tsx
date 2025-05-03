import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/i18n-config"
import Image from "next/image"
import type { Metadata } from 'next'

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stars: number;
}

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { lang } = await params
  
  return {
    title: 'Home',
    description: 'Transforming your business with innovative digital solutions. Web development, mobile apps, and custom software to drive your growth.',
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'ar': '/ar',
      },
    },
    openGraph: {
      title: "Nibras Dev | Web & Mobile Development",
      description: "Transform your ideas into digital reality. Professional web and mobile development services.",
      url: `https://nibrasdev.com/${lang}`,
      images: [
        {
          url: '/og-home.jpg',
          width: 1200,
          height: 630,
          alt: 'Nibras Dev Home Page',
        },
      ],
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
      <section id="hero-section" className="bg-gradient-to-r from-blue-700 to-blue-900 pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <div className={`flex flex-col md:flex-row items-center ${lang === "ar" ? "md:flex-row-reverse" : ""}`}>
            <div className={`md:w-1/2 text-white mb-10 md:mb-0 ${lang === "ar" ? "md:text-right" : ""}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {dictionary.home.hero.title}
              </h1>
              <p className="text-blue-100 text-xl mb-8">
                {dictionary.home.hero.description}
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 ${lang === "ar" ? "sm:flex-row-reverse" : ""}`}>
                <span className="bg-white text-blue-700 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300 text-center cursor-pointer whitespace-nowrap">
                  {dictionary.home.hero.services}
                </span>
                <span className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition-colors duration-300 text-center cursor-pointer whitespace-nowrap">
                  {dictionary.home.hero.contact}
                </span>
              </div>
            </div>
            <div className={`md:w-1/2 flex ${lang === "ar" ? "justify-start" : "justify-center"}`}>
              <img className="w-full max-w-lg rounded-lg shadow-2xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7e76823a4a-93712e2e8e3385fa001e.png" alt="3D digital abstract" />
            </div>
          </div>
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
              <div className="text-blue-600 text-4xl font-bold mb-2">10+</div>
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
