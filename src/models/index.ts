import { Component } from 'solid-js'

export interface ProjectComponentProps {
  project: Project
  headerRef: HTMLElement | undefined
}

export interface Project {
  id: string
  name: string
  company: Company
  product?: string
  tags: string[]
  tabs: Tab[]
  thumbnail: string
  component: Component<ProjectComponentProps>
  show?: boolean
  link?: string
  externalLink?: string
}

export type Company =
  | 'efficy'
  | 'tis'
  | 'dit'
  | 'escape'
  | 'sobaka-pavlova'
  | 'vmtp'
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
    website: '',
    logo: '/company-icons/sobaka-pavlova.svg',
  },
  dit: {
    name: 'DIT',
    website: '',
    logo: '/company-icons/dit.svg',
  },
  escape: {
    name: 'Escape',
    website: 'https://escape-team.tech/',
    logo: '/company-icons/escape.svg',
  },
  'sobaka-pavlova': {
    name: 'Sobaka Pavlova',
    website: 'https://sobakapav.ru/',
    logo: '/company-icons/sobaka-pavlova.svg',
  },
  vmtp: {
    name: 'VMTP',
    website: 'https://en.vmtp.ru/',
    logo: '/company-icons/vmtp.svg',
  },
}

export interface Tab {
  id: string
  name: string
  path?: string
  class?: string
}
