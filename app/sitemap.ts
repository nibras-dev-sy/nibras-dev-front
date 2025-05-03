import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL for your site
  const baseUrl = 'https://nibrasdev.com'
  // Supported languages
  const languages = ['en', 'ar']
  // Pages in your site
  const routes = ['', '/services', '/about', '/contact']
  
  const sitemap: MetadataRoute.Sitemap = []
  
  // Generate entries for each page in each language
  languages.forEach(lang => {
    routes.forEach(route => {
      const path = route === '' ? `/${lang}` : `/${lang}${route}`
      
      sitemap.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })
  
  return sitemap
} 