// Type definitions for the application

export interface NavLink {
  label: string
  href: string
}

export interface SocialLinks {
  github?: string
  linkedin?: string
  email?: string
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  social: SocialLinks
}
