export type ProductTone = 'soft' | 'warm' | 'dark'

export interface ProductColor {
  name: string
  hex: string
}

export interface ProductShot {
  label: string
  src: string
  alt: string
  tone: ProductTone
}

export interface ProductDetail {
  title: string
  body: string
}

export interface Product {
  slug: string
  name: string
  category: string
  price: string
  description: string
  tone: ProductTone
  /** Swatch colors as hex values; names are resolved via `colorLabel`. */
  colors: string[]
  sizes: string[]
  frontImage: string
  backImage: string
  /** Optional bespoke accordion content; falls back to `productDetails`. */
  details?: ProductDetail[]
}

const defaultSizes = ['XS', 'S', 'M', 'L', 'XL']

const colorNames: Record<string, string> = {
  '#f5f2ed': 'Молоко',
  '#e6e1dc': 'Кремовый',
  '#b8b4ad': 'Серый камень',
  '#6b6b66': 'Графит',
  '#1d1b17': 'Уголь',
  '#d5cbc4': 'Песочный',
  '#aba298': 'Тауп',
  '#c6b7a9': 'Глина',
  '#948778': 'Хаки',
  '#7c807a': 'Дым',
  '#645f56': 'Олива',
  '#3a3833': 'Антрацит',
  '#d9cfb8': 'Овсяный',
  '#6b6b53': 'Болотный',
  '#efeadd': 'Слоновая кость',
  '#b08968': 'Карамель'
}

// Единый источник данных каталога. Позже заменяется ответом бэкенда —
// страницам достаточно `getProductBySlug` / `products`.
export const products: Product[] = [
  {
    slug: 'classic-tee',
    name: 'Classic Tee',
    category: 'Футболки и топы',
    price: '4 200 ₽',
    description: 'Базовая футболка из плотного органического хлопка с ровной посадкой по фигуре. Сшита малой партией в нашей московской студии.',
    tone: 'soft',
    colors: ['#f5f2ed', '#e6e1dc', '#b8b4ad', '#6b6b66'],
    sizes: defaultSizes,
    frontImage: '/images/examples/square/classic-tee-front.png',
    backImage: '/images/examples/square/classic-tee-back.png'
  },
  {
    slug: 'heavy-sweatshirt',
    name: 'Heavy Sweatshirt',
    category: 'Свитшоты и трикотаж',
    price: '7 200 ₽',
    description: 'Плотный свитшот из органического хлопка с начёсом. Свободный, но собранный крой, широкая резинка по низу и рукавам. Сшит малой партией в нашей московской студии.',
    tone: 'dark',
    colors: ['#3a3833', '#d9cfb8', '#6b6b53', '#efeadd', '#b08968'],
    sizes: defaultSizes,
    frontImage: '/images/examples/square/heavy-sweatshirt-front.png',
    backImage: '/images/examples/square/heavy-sweatshirt-back.png',
    details: [
      {
        title: 'Материал и уход',
        body: '100% органический хлопок, плотность 380 г/м². Стирка при 30°, без отбеливания, сушка в расправленном виде. Ткань слегка садится после первой стирки — крой это учитывает.'
      },
      {
        title: 'Крой и посадка',
        body: 'Свободный крой прямого силуэта. Спущенное плечо, широкая резинка по низу и манжетам. Модель ростом 178 см в размере M.'
      },
      {
        title: 'Доставка и возврат',
        body: 'Отправляем из Москвы за 1–3 рабочих дня. Бесплатная доставка при заказе от 8 000 ₽. Возврат в течение 14 дней.'
      }
    ]
  },
  {
    slug: 'relaxed-shorts',
    name: 'Relaxed Shorts',
    category: 'Брюки и шорты',
    price: '4 800 ₽',
    description: 'Свободные шорты из плотного хлопка с фиксированным поясом. Удобная длина до колена и аккуратная посадка.',
    tone: 'warm',
    colors: ['#c6b7a9', '#948778', '#6b6b66', '#d5cbc4'],
    sizes: defaultSizes,
    frontImage: '/images/examples/square/relaxed-shorts-front.png',
    backImage: '/images/examples/square/relaxed-shorts-back.png'
  },
  {
    slug: 'wide-pants',
    name: 'Wide Pants',
    category: 'Брюки и шорты',
    price: '6 900 ₽',
    description: 'Широкие брюки прямого кроя из плотного хлопка. Мягко ложатся по фигуре и держат форму в течение дня.',
    tone: 'soft',
    colors: ['#d5cbc4', '#1d1b17', '#645f56'],
    sizes: defaultSizes,
    frontImage: '/images/examples/square/wide-pants-front.png',
    backImage: '/images/examples/square/wide-pants-back.png'
  },
  {
    slug: 'tank-top',
    name: 'Tank Top',
    category: 'Футболки и топы',
    price: '2 600 ₽',
    description: 'Лёгкая майка из мягкого хлопка с аккуратной проймой. Базовый слой на каждый день.',
    tone: 'dark',
    colors: ['#948778', '#1d1b17', '#7c807a'],
    sizes: defaultSizes,
    frontImage: '',
    backImage: ''
  },
  {
    slug: 'hoodie',
    name: 'Hoodie',
    category: 'Свитшоты и трикотаж',
    price: '8 900 ₽',
    description: 'Худи из плотного футера с начёсом и объёмным капюшоном. Свободный крой и широкая резинка по низу.',
    tone: 'warm',
    colors: ['#1d1b17', '#e6e1dc', '#aba298', '#c6b7a9'],
    sizes: defaultSizes,
    frontImage: '',
    backImage: ''
  },
  {
    slug: 'long-sleeve',
    name: 'Long Sleeve',
    category: 'Свитшоты и трикотаж',
    price: '4 900 ₽',
    description: 'Лонгслив из плотного хлопкового джерси с ровной посадкой. Универсальный слой для межсезонья.',
    tone: 'soft',
    colors: ['#f5f2ed', '#aba298', '#7c807a'],
    sizes: defaultSizes,
    frontImage: '',
    backImage: ''
  },
  {
    slug: 'relaxed-shorts-2',
    name: 'Relaxed Shorts 2.0',
    category: 'Брюки и шорты',
    price: '5 100 ₽',
    description: 'Обновлённые свободные шорты с более длинной посадкой и мягким поясом на резинке.',
    tone: 'dark',
    colors: ['#d5cbc4', '#1d1b17', '#645f56'],
    sizes: defaultSizes,
    frontImage: '',
    backImage: ''
  },
  {
    slug: 'crew-neck-tee',
    name: 'Crew Neck Tee',
    category: 'Футболки и топы',
    price: '4 500 ₽',
    description: 'Футболка с круглым вырезом из плотного хлопка. Ровная посадка и аккуратная горловина.',
    tone: 'warm',
    colors: ['#e6e1dc', '#d5cbc4', '#948778', '#1d1b17', '#7c807a'],
    sizes: defaultSizes,
    frontImage: '',
    backImage: ''
  },
  {
    slug: 'sweatpants',
    name: 'Sweatpants',
    category: 'Брюки и шорты',
    price: '6 700 ₽',
    description: 'Свободные джоггеры из плотного футера с начёсом. Мягкий пояс на резинке и манжеты по низу.',
    tone: 'soft',
    colors: ['#d5cbc4', '#1d1b17', '#948778'],
    sizes: defaultSizes,
    frontImage: '',
    backImage: ''
  },
  {
    slug: 'oversize-tee',
    name: 'Oversize Tee',
    category: 'Футболки и топы',
    price: '4 900 ₽',
    description: 'Футболка свободного кроя со спущенным плечом. Плотный хлопок и удлинённый силуэт.',
    tone: 'dark',
    colors: ['#1d1b17', '#d5cbc4', '#7c807a', '#c6b7a9'],
    sizes: defaultSizes,
    frontImage: '',
    backImage: ''
  },
  {
    slug: 'shirt-jacket',
    name: 'Shirt Jacket',
    category: 'Верхняя одежда',
    price: '7 900 ₽',
    description: 'Рубашка-куртка из плотной хлопковой саржи. Накладные карманы и лёгкая структура для прохладной погоды.',
    tone: 'warm',
    colors: ['#c6b7a9', '#948778'],
    sizes: defaultSizes,
    frontImage: '',
    backImage: ''
  }
]

export const colorLabel = (hex: string) => colorNames[hex.toLowerCase()] ?? 'Цвет'

export const productPath = (slug: string) => `/catalog/${slug}`

export const getProductBySlug = (slug: string) => products.find(product => product.slug === slug)

export const productColors = (product: Product): ProductColor[] =>
  product.colors.map(hex => ({ hex, name: colorLabel(hex) }))

export const productShots = (product: Product): ProductShot[] => [
  { label: 'фронт', src: product.frontImage, alt: `${product.name} спереди`, tone: product.tone },
  { label: 'спина', src: product.backImage || product.frontImage, alt: `${product.name} со спины`, tone: product.tone }
]

export const productDetails = (product: Product): ProductDetail[] =>
  product.details ?? [
    {
      title: 'Материал и уход',
      body: 'Натуральные материалы, приятные к телу. Стирка при 30°, без отбеливания, сушка в расправленном виде.'
    },
    {
      title: 'Крой и посадка',
      body: 'Ровная посадка по фигуре. Полноразмерная сетка — при сомнении между размерами берите меньший.'
    },
    {
      title: 'Доставка и возврат',
      body: 'Отправляем из Москвы за 1–3 рабочих дня. Бесплатная доставка при заказе от 8 000 ₽. Возврат в течение 14 дней.'
    }
  ]

export const relatedProducts = (product: Product, limit = 4): Product[] =>
  products.filter(item => item.slug !== product.slug).slice(0, limit)
