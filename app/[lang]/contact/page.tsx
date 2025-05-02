import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/i18n-config"

export default async function Contact({
  params,
}: {
  params: any
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <section id="contact-section" className="bg-white pt-32 py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{dictionary.contact.hero.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {dictionary.contact.hero.description}
          </p>
        </div>
        
        <div className={`flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto ${lang === "ar" ? "lg:flex-row-reverse" : ""}`}>
          <div id="contact-form-container" className="lg:w-1/2">
            <form id="contact-form" className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">{dictionary.contact.form.name.label}</label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={dictionary.contact.form.name.placeholder} />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">{dictionary.contact.form.email.label}</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={dictionary.contact.form.email.placeholder} />
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">{dictionary.contact.form.phone.label}</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={dictionary.contact.form.phone.placeholder} />
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 mb-2 font-medium">{dictionary.contact.form.service.label}</label>
                <select id="service" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="" selected disabled>{dictionary.contact.form.service.placeholder}</option>
                  <option value="web">{dictionary.contact.form.service.options.web}</option>
                  <option value="mobile">{dictionary.contact.form.service.options.mobile}</option>
                  <option value="cloud">{dictionary.contact.form.service.options.cloud}</option>
                  <option value="database">{dictionary.contact.form.service.options.database}</option>
                  <option value="devops">{dictionary.contact.form.service.options.devops}</option>
                  <option value="security">{dictionary.contact.form.service.options.security}</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">{dictionary.contact.form.message.label}</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder={dictionary.contact.form.message.placeholder}></textarea>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300">
                {dictionary.contact.form.submit}
              </button>
            </form>
          </div>
          
          <div id="contact-info-container" className="lg:w-1/2">
            <div id="contact-details" className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">{dictionary.contact.info.title}</h3>
              
              <div className="space-y-8">
                
                <div id="phone-info" className={`flex items-start ${lang === "ar" ? "flex-row-reverse text-right" : ""}`}>
                  <div className={`w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 ${lang === "ar" ? "ml-4" : "mr-4"}`}>
                    <i className="fa-solid fa-phone text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">{dictionary.contact.info.phone.title}</h4>
                    <p className="text-gray-600 text-lg">{dictionary.contact.info.phone.number}</p>
                  </div>
                </div>
                
                <div id="email-info" className={`flex items-start ${lang === "ar" ? "flex-row-reverse text-right" : ""}`}>
                  <div className={`w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 ${lang === "ar" ? "ml-4" : "mr-4"}`}>
                    <i className="fa-solid fa-envelope text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">{dictionary.contact.info.email.title}</h4>
                    <p className="text-gray-600 text-lg">{dictionary.contact.info.email.primary}</p>
                  </div>
                </div>
              </div>
              
              <div id="social-connect" className={`mt-10 ${lang === "ar" ? "text-right" : ""}`}>
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">{dictionary.contact.info.social.title}</h4>
                <div className={`flex space-x-4 ${lang === "ar" ? "justify-end space-x-reverse" : ""}`}>
                  <span className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                    <i className="fa-brands fa-linkedin-in text-lg"></i>
                  </span>
                  <span className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                    <i className="fa-brands fa-twitter text-lg"></i>
                  </span>
                  <span className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                    <i className="fa-brands fa-facebook-f text-lg"></i>
                  </span>
                  <span className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                    <i className="fa-brands fa-instagram text-lg"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 