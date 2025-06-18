import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/i18n-config"
import Image from "next/image"
import type { Metadata } from 'next'

export default async function About({
  params,
}: {
  params: any
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <>
      {/* Our Story Section */}
      <section id="our-story-section" className="bg-white pt-32 py-20 px-6">
        <div className="container mx-auto">
          <div className={`flex flex-col lg:flex-row items-center gap-16`}>
            <div id="story-image" className="lg:w-1/2">
              <div className="relative">
                <div className={`absolute ${lang === "ar" ? "-right-6" : "-left-6"} -top-6 w-24 h-24 bg-blue-100 rounded-lg z-0`}></div>
                <img 
                  className="relative z-10 rounded-lg shadow-xl w-full" 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3a8ca0f87d-d384dfbf48cdd1ea06dc.png" 
                  alt={dictionary.about.story.imageAlt} 
                />
                <div className={`absolute ${lang === "ar" ? "-left-6" : "-right-6"} -bottom-6 w-24 h-24 bg-blue-600 rounded-lg z-0`}></div>
              </div>
            </div>
            <div id="story-content" className={`lg:w-1/2 ${lang === "ar" ? "text-right" : ""}`}>
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-md text-blue-700 font-medium mb-4">
                {dictionary.about.story.badge}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {dictionary.about.story.title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {dictionary.about.story.paragraph1}
              </p>
              <p className="text-gray-600 mb-6">
                {dictionary.about.story.paragraph2}
              </p>
              <p className="text-gray-600 mb-6">
                {dictionary.about.story.paragraph3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section id="mission-values-section" className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-md text-blue-700 font-medium mb-4">
              {dictionary.about.mission.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {dictionary.about.mission.title}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {dictionary.about.mission.description}
            </p>
          </div>
          
          <div id="mission-section" className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className={`flex flex-col md:flex-row items-center gap-8 ${lang === "ar" ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-lightbulb text-white text-5xl"></i>
                </div>
              </div>
              <div className={`md:w-2/3 ${lang === "ar" ? "text-right" : ""}`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {dictionary.about.mission.missionTitle}
                </h3>
                <p className="text-gray-600 text-lg mb-4">
                  {dictionary.about.mission.missionText1}
                </p>
                <p className="text-gray-600">
                  {dictionary.about.mission.missionText2}
                </p>
              </div>
            </div>
          </div>
          
          <div id="values-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dictionary.about.mission.values.map((value: any, index: number) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <i className={`fa-solid ${
                    index === 0 ? "fa-star" :
                    index === 1 ? "fa-lightbulb" :
                    index === 2 ? "fa-users" :
                    "fa-handshake"
                  } text-2xl text-blue-600`}></i>
                </div>
                <h3 className={`text-xl font-bold text-gray-800 mb-4`}>
                  {value.title}
                </h3>
                <p className={`text-gray-600`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 