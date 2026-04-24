import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.roget-concept.be'

interface SitemapEntryConfig {
  path: string
  includeXDefault?: boolean
}

function createSitemapEntry(
  config: SitemapEntryConfig,
  lastModified: Date
): MetadataRoute.Sitemap {
  const { path, includeXDefault = false } = config

  return [
    {
      url: `${BASE_URL}/en${path}`,
      lastModified,
      alternates: {
        languages: {
          en: `${BASE_URL}/en${path}`,
          fr: `${BASE_URL}/fr${path}`,
          ...(includeXDefault && { 'x-default': `${BASE_URL}/en${path}` }),
        },
      },
    },
    {
      url: `${BASE_URL}/fr${path}`,
      lastModified,
      alternates: {
        languages: {
          en: `${BASE_URL}/en${path}`,
          fr: `${BASE_URL}/fr${path}`,
          ...(includeXDefault && { 'x-default': `${BASE_URL}/en${path}` }),
        },
      },
    },
  ]
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const entries: SitemapEntryConfig[] = [
    { path: '', includeXDefault: true },
    { path: '/privacy' },
    { path: '/projects/paniers', includeXDefault: true },
    { path: '/projects/voxroom', includeXDefault: true },
  ]

  return entries.flatMap((entry) => createSitemapEntry(entry, lastModified))
}
