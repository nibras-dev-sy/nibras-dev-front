import { MetadataRoute } from 'next'
import { i18n } from '@/lib/i18n-config'

type RouteInfo = {
  path: string;
  priority: number;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  lastModified?: Date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL for your site
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nibrasdev.com'
  
  // Define your routes with their priorities and change frequencies
  const routes: RouteInfo[] = [
    { 
      path: '', 
      priority: 1.0, 
      changeFrequency: 'weekly',
      lastModified: new Date() 
    },
    { 
      path: '/services', 
      priority: 0.9, 
      changeFrequency: 'monthly',
      lastModified: new Date() 
    },
    { 
      path: '/about', 
      priority: 0.8, 
      changeFrequency: 'monthly',
      lastModified: new Date() 
    },
    { 
      path: '/contact', 
      priority: 0.8, 
      changeFrequency: 'monthly',
      lastModified: new Date() 
    },
    // Add any additional pages or dynamic routes here
  ]
  
  const sitemap: MetadataRoute.Sitemap = []
  
  // Generate sitemap entries for all routes in all supported languages
  i18n.locales.forEach(lang => {
    routes.forEach(({ path, priority, changeFrequency, lastModified }) => {
      const url = path === '' ? `/${lang}` : `/${lang}${path}`
      
      sitemap.push({
        url: `${baseUrl}${url}`,
        lastModified: lastModified || new Date(),
        changeFrequency,
        priority,
      })
    })
  })
  
  // Add the root URL that redirects to default language
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  })
  
  return sitemap
} 