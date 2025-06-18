import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/i18n-config"
import type { Metadata } from 'next'

interface Platform {
  icon: string;
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { lang } = await params
  const dictionary = await getDictionary(lang as Locale)
  
  // Arabic metadata
  if (lang === 'ar') {
    return {
      title: 'نبراس لتكنولوجيا الأعمال - خدماتنا',
      description: 'نبني حلول برمجية مبتكرة تدفع نمو الأعمال وتقدم تجربة مستخدم استثنائية من أنظمة ERP وCRM والتطبيقات المتكاملة إلى تنفيذ البنية التحتية الرقمية للشركات.',
    }
  }
  
  // English metadata
  return {
    title: 'Nibras Enterprise Technologies - Our Services',
    description: 'We build innovative software solutions that drive business growth and deliver exceptional user experiences from ERP and CRM systems to integrated applications to implementing the digital infrastructure of companies.',
  }
}

export default async function Services({
  params,
}: {
  params: any
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <>
      {/* Services Hero Section */}
      {/*<section id="services-hero" className="bg-gradient-to-r from-blue-700 to-blue-900 pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <div className={`max-w-3xl`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              {dictionary.services.hero.title}
            </h1>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl">
              {dictionary.services.hero.description}
            </p>
          </div>
        </div>
      </section>*/}

      {/* Provided Enterprise Technologies */}
      <section id="enterprise-technologies" className="bg-white mt-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {dictionary.services.enterpriseTechnologies.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {dictionary.services.enterpriseTechnologies.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dictionary.services.enterpriseTechnologies.items.map((item: any, index: number) => {
              // Assign icons based on index (order matches the provided list)
              const icons = [
                "fa-network-wired", // ERP Systems (Odoo)
                "fa-utensils", // Restaurants POS
                "fa-store", // Shops & Supermarkets POS
                "fa-truck-moving", // Fleet Management
                "fa-industry", // Manufacturing with IoT
                "fa-warehouse", // Inventories with sales
                "fa-chalkboard-teacher", // Learning, schools, institutes
                "fa-video", // Security camera
                "fa-project-diagram", // Networks implementation
                "fa-cloud" // Cloud services
              ];
              const icon = icons[index] || "fa-cubes";
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <i className={`fa-solid ${icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <ul className="text-gray-600 space-y-2 mb-6 list-disc list-inside">
                    {item.details.map((detail: string, detailIndex: number) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* E-Commerce Platforms */}
      <section id="ecommerce-platforms" className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {dictionary.services.platforms.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {dictionary.services.platforms.platforms.map((platform: Platform, index: number) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <img 
                    src={`/logos/${
                      index === 0 ? "odoo.png" :
                      index === 1 ? "aws.png" :
                      index === 2 ? "azure.png" :
                      "dahua.png"
                    }`}
                    alt={`${platform.title} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{platform.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
} 