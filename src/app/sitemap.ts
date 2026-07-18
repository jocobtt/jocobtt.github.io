import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://jocobtt.github.io'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', 'about', 'resume', 'connect']

  return routes.map((route) => ({
    url: route ? `${baseUrl}/${route}/` : `${baseUrl}/`,
    lastModified: new Date(),
  }))
}
