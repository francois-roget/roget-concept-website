import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.roget-concept.be'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: `${BASE_URL}/en`,
      lastModified,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          fr: `${BASE_URL}/fr`,
          'x-default': `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/fr`,
      lastModified,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          fr: `${BASE_URL}/fr`,
          'x-default': `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/privacy`,
      lastModified,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/privacy`,
          fr: `${BASE_URL}/fr/privacy`,
        },
      },
    },
    {
      url: `${BASE_URL}/fr/privacy`,
      lastModified,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/privacy`,
          fr: `${BASE_URL}/fr/privacy`,
        },
      },
    },
  ]
}
