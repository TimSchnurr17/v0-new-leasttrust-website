export interface NavItem {
  label: string
  href: string
  subItems?: NavItem[]
}

export interface ServiceItem {
  title: string
  description: string
  icon: string
  image?: string
}

export interface TestimonialItem {
  quote: string
  author: string
  position: string
  company: string
  image?: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
  image?: string
}

export interface StakeItem {
  icon: string
  text: string
}
