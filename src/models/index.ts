import { Component } from 'solid-js'

export interface Project {
  id: string
  name: string
  company: Company
  product?: string
  tags: string[]
  thumbnail: string
  component: Component<{ project: Project }>
}

export type Company = 'efficy' | 'tis' | 'dit'
// | 'vmtp'

export interface CompanyData {
  name: string
  website: string
  logo: string
}

export const Companies: Record<Company, CompanyData> = {
  efficy: {
    name: 'Efficy',
    website: 'https://www.efficy.com/',
    logo: '/company-icons/efficy.svg',
  },
  tis: {
    name: 'TIS',
    website: 'https://www.efficy.com/',
    logo: '/company-icons/tis.svg',
  },
  dit: {
    name: 'DIT',
    website: 'https://www.efficy.com/',
    logo: '/company-icons/dit.svg',
  },
}

export interface Tab {
  id: string
  name: string
  path?: string
  class?: string
}
