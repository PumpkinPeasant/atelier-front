type SeoInput = {
  title?: string
  description?: string
  image?: string
  path?: string
}

const siteName = 'Nora Hale Atelier'
const defaultTitle = 'Базовые вещи ручной работы на каждый день'
const defaultDescription = 'Небольшая студия одежды с фокусом на качество, посадку и долговечность.'
const defaultImage = '/images/hero-shirt.png'

export const createSeoTitle = (title = defaultTitle) => {
  return title === siteName ? siteName : `${title} | ${siteName}`
}

export const createSeoDescription = (description = defaultDescription) => {
  return description
}

export const createSeoMeta = ({
  title = defaultTitle,
  description = defaultDescription,
  image = defaultImage,
  path = '/'
}: SeoInput = {}) => {
  const seoTitle = createSeoTitle(title)
  const seoDescription = createSeoDescription(description)

  return {
    title: seoTitle,
    description: seoDescription,
    ogTitle: seoTitle,
    ogDescription: seoDescription,
    ogImage: image,
    ogUrl: path,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: seoTitle,
    twitterDescription: seoDescription,
    twitterImage: image
  }
}
