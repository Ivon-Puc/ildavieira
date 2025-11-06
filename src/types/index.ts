export interface Course {
  id: string
  title: string
  description: string
  duration: string
  shift: string
  skills: string[]
  marketDemand: 'alta' | 'média' | 'baixa'
  employabilityRate: number
}

export interface SchoolInfo {
  name: string
  fullName: string
  address: string
  cep: string
  phone: string
  email?: string
  instagram: string
  newsInstagram: string
  capacity: number
  infrastructure: string[]
  schedule: {
    morning: { open: string; close: string; classes: string }
    afternoon: { open: string; close: string; classes: string }
    evening: { open: string; close: string; classes: string }
  }
  management: {
    director: string
    viceDirectors: string[]
    coordinators: string[]
  }
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  course: string
  message: string
}

export interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  imageUrl?: string
  category: 'noticia' | 'evento' | 'conquista'
}

export interface ImageAsset {
  id: string
  alt: string
  publicId: string
  category: 'infrastructure' | 'activities' | 'events' | 'general'
}