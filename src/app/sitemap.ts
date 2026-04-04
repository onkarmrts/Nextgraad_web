import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.nextgraad.in',              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: 'https://www.nextgraad.in/ai-ecosystem', lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: 'https://www.nextgraad.in/products',     lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: 'https://www.nextgraad.in/internships',  lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: 'https://www.nextgraad.in/recruiters',   lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: 'https://www.nextgraad.in/contact',      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.nextgraad.in/about',        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.nextgraad.in/privacy-policy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.nextgraad.in/terms',          lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.nextgraad.in/refund-policy',  lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}