import { getDictionary } from "@/lib/dictionary"

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
      <section id="services-hero" className="bg-gradient-to-r from-blue-700 to-blue-900 pt-40 pb-20 px-6">
        <div className="container mx-auto">
          <div className={`max-w-3xl`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              {dictionary.services.hero.title}
            </h1>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl">
              {dictionary.services.hero.description}
            </p>
            <div className={`flex gap-4`}>
              <span className="bg-white text-blue-700 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300 text-center cursor-pointer whitespace-nowrap">
                {dictionary.services.hero.business}
              </span>
              <span className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition-colors duration-300 text-center cursor-pointer whitespace-nowrap">
                {dictionary.services.hero.ecommerce}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services-overview" className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {dictionary.services.overview.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {dictionary.services.overview.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div id="service-overview-1" className="bg-blue-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fa-solid fa-code text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{dictionary.services.overview.custom.title}</h3>
              <p className="text-gray-600">{dictionary.services.overview.custom.description}</p>
            </div>
            
            <div id="service-overview-2" className="bg-blue-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fa-solid fa-paintbrush text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{dictionary.services.overview.uiux.title}</h3>
              <p className="text-gray-600">{dictionary.services.overview.uiux.description}</p>
            </div>
            
            <div id="service-overview-3" className="bg-blue-50 p-8 rounded-lg transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fa-solid fa-gauge-high text-3xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{dictionary.services.overview.performance.title}</h3>
              <p className="text-gray-600">{dictionary.services.overview.performance.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Websites Section */}
      <section id="business-websites" className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto">
          <div className={`flex flex-col lg:flex-row items-center gap-12`}>
            <div className={`lg:w-1/2 order-2 lg:order-1`}>
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                {dictionary.services.business.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6">
                {dictionary.services.business.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {dictionary.services.business.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {dictionary.services.business.features.map((feature: any, index: number) => (
                  <div key={index} className={`flex items-start`}>
                    <div className={`w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1`}>
                      <i className={`fa-solid ${index === 0 ? "fa-mobile-screen" : 
                                              index === 1 ? "fa-magnifying-glass" :
                                              index === 2 ? "fa-gauge-high" : "fa-lock"} text-blue-600`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <span className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 inline-block cursor-pointer">
                {dictionary.services.business.cta}
              </span>
            </div>
            
            <div className={`lg:w-1/2 order-1 lg:order-2} mb-10 lg:mb-0`}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-lg z-0"></div>
                <div className="relative z-10">
                  <img 
                    className="w-full h-auto rounded-lg shadow-xl" 
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/940bb46e3d-74fa44542223cb03f620.png" 
                    alt="professional business website mockup" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Website Types */}
      <section id="website-types" className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {dictionary.services.websiteTypes.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {dictionary.services.websiteTypes.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dictionary.services.websiteTypes.types.map((type: any, index: number) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <i className={`fa-solid ${
                    index === 0 ? "fa-building" :
                    index === 1 ? "fa-bullhorn" :
                    index === 2 ? "fa-newspaper" :
                    index === 3 ? "fa-handshake" :
                    index === 4 ? "fa-user-tie" :
                    "fa-calendar-check"
                  } text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  {type.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className={`flex items-center`}>
                      <i className={`fa-solid fa-check text-green-500 mr-2`}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Commerce Solutions Section */}
      <section id="ecommerce-solutions" className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto">
          <div className={`flex flex-col lg:flex-row items-center gap-12`}>
            <div className={`lg:w-1/2 mb-10 lg:mb-0`}>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-lg z-0"></div>
                <div className="relative z-10">
                  <img 
                    className="w-full h-auto rounded-lg shadow-xl" 
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/f7a8fb206c-381048f0342df0a040ca.png" 
                    alt="modern e-commerce website interface" 
                  />
                </div>
              </div>
            </div>
            
            <div className={`lg:w-1/2`}>
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                {dictionary.services.ecommerce.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-6">
                {dictionary.services.ecommerce.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {dictionary.services.ecommerce.description}
              </p>
              
              <div className="space-y-4 mb-8">
                {dictionary.services.ecommerce.features.map((feature: any, index: number) => (
                  <div key={index} className={`flex items-start`}>
                    <div className={`w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1`}>
                      <i className={`fa-solid ${
                        index === 0 ? "fa-cart-shopping" :
                        index === 1 ? "fa-credit-card" :
                        index === 2 ? "fa-box" :
                        "fa-chart-line"
                      } text-blue-600`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <span className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 inline-block cursor-pointer">
                {dictionary.services.ecommerce.cta}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Platforms */}
      <section id="ecommerce-platforms" className="bg-white py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {dictionary.services.platforms.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {dictionary.services.platforms.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dictionary.services.platforms.platforms.map((platform: Platform, index: number) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <i className={`${
                    index === 0 ? "fa-brands fa-shopify text-green-600" :
                    index === 1 ? "fa-brands fa-wordpress text-blue-600" :
                    "fa-solid fa-cart-shopping text-purple-600"
                  } text-4xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{platform.title}</h3>
                <p className="text-gray-600 mb-6">{platform.description}</p>
                <div className="mt-auto">
                  <span className="text-blue-600 font-medium cursor-pointer">Learn more</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-8">{dictionary.services.platforms.featuresTitle}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {dictionary.services.platforms.features.map((feature: string, index: number) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center justify-center mb-4">
                    <i className={`fa-solid ${
                      index === 0 ? "fa-mobile-screen" :
                      index === 1 ? "fa-truck" :
                      index === 2 ? "fa-tag" :
                      index === 3 ? "fa-users" :
                      index === 4 ? "fa-globe" :
                      index === 5 ? "fa-money-bill" :
                      index === 6 ? "fa-star" :
                      "fa-headset"
                    } text-2xl text-blue-600`}></i>
                  </div>
                  <h4 className="font-semibold text-gray-800">{feature}</h4>
                </div>
              ))}
            </div>
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
            {dictionary.services.process.steps.map((step: ProcessStep, index: number) => (
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

      {/* CTA Section */}
      <section id="cta-section" className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-4xl bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-xl py-16 px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {dictionary.home.callToAction.title}
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            {dictionary.home.callToAction.description}
          </p>
          <div className={`flex flex-col sm:flex-row justify-center gap-4`}>
            <span className="bg-white text-blue-700 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
              {dictionary.home.callToAction.button}
            </span>
            <span className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-700 transition-colors duration-300 cursor-pointer">
              {dictionary.navigation.contact}
            </span>
          </div>
        </div>
      </section>
    </>
  )
} 