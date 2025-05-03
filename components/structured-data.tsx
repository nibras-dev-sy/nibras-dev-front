"use client"

import React from 'react'
import Script from 'next/script'

interface OrganizationSchema {
  name: string
  url: string
  logo: string
  sameAs: string[]
  contactPoint: {
    telephone: string
    contactType: string
    areaServed: string[]
    availableLanguage: string[]
  }[]
}

interface WebsiteSchema {
  url: string
  name: string
  inLanguage: string[]
}

interface ServiceSchema {
  name: string
  description: string
  provider: {
    name: string
  }
  areaServed: string[]
  hasOfferCatalog: {
    itemListElement: {
      "@type": string
      name: string
      description: string
    }[]
  }
}

export default function StructuredData() {
  // Organization Data
  const organizationData: OrganizationSchema = {
    name: "Nibras Dev",
    url: "https://nibrasdev.com",
    logo: "https://nibrasdev.com/logo2.png",
    sameAs: [
      "https://www.facebook.com/nibrasdev",
      "https://www.linkedin.com/company/nibrasdev",
      "https://twitter.com/nibrasdev",
      "https://www.instagram.com/nibrasdev"
    ],
    contactPoint: [
      {
        telephone: "+963933032684",
        contactType: "customer service",
        areaServed: ["Worldwide"],
        availableLanguage: ["English", "Arabic"]
      }
    ]
  }

  // Website Data
  const websiteData: WebsiteSchema = {
    url: "https://nibrasdev.com",
    name: "Nibras Dev - Web & Mobile Development",
    inLanguage: ["en", "ar"]
  }

  // Service Data
  const serviceData: ServiceSchema = {
    name: "Web & Mobile Development",
    description: "Professional web and mobile development services for businesses worldwide. Custom solutions, modern design, and exceptional performance.",
    provider: {
      name: "Nibras Dev"
    },
    areaServed: ["Worldwide"],
    hasOfferCatalog: {
      itemListElement: [
        {
          "@type": "Offer",
          name: "Web Development",
          description: "Custom business websites optimized for performance and SEO."
        },
        {
          "@type": "Offer",
          name: "Mobile App Development",
          description: "Native and cross-platform mobile applications."
        },
        {
          "@type": "Offer",
          name: "E-commerce Solutions",
          description: "Online stores built with cutting-edge technology."
        },
        {
          "@type": "Offer",
          name: "UI/UX Design",
          description: "User-centered design focused on engagement and conversion."
        }
      ]
    }
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            ...organizationData
          })
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            ...websiteData
          })
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            ...serviceData
          })
        }}
      />
    </>
  )
} 