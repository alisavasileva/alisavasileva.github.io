import { Company } from '@/models'

export interface Product {
  name: string
  type: string
  role: string
  company: Company
  platform: string
  years: string
  link?: string
}

export const Products: Product[] = [
  {
    name: 'Maxo',
    type: 'CRM',
    role: 'Product designer',
    company: 'efficy',
    platform: 'Web & Mobile',
    years: '2024 – 2025',
  },
  {
    name: 'Apsis',
    type: 'Marketing automation ',
    role: 'UI designer',
    company: 'efficy',
    platform: 'Web',
    years: '2024 – 2025',
    link: 'https://www.apsis.se/',
  },
  {
    name: 'DIT',
    type: 'Analytics dashboard ',
    role: 'Product designer',
    company: 'escape',
    platform: 'Web',
    years: '2023',
  },
  {
    name: 'RZHD',
    type: 'Railway operator',
    role: 'UX/UI designer',
    company: 'escape',
    platform: 'Web',
    years: '2020-2022',
  },
  {
    name: 'VMTP',
    type: 'Commercial Port of Vladivostok',
    role: 'Product designer',
    company: 'escape',
    platform: 'Web & Mobile',
    years: '2020-2023',
    link: 'https://en.vmtp.ru/',
  },
  {
    name: 'TIS',
    type: 'Remote patient monitoring',
    role: 'UX designer',
    company: 'sobaka-pavlova',
    platform: 'Web & Mobile',
    years: '2019',
    link: 'http://www.tis-tatar.ru/',
  },
  {
    name: 'VSmart',
    type: 'Messenger',
    role: 'UX/UI designer',
    company: 'escape',
    platform: 'Mobile',
    years: '2019',
    link: 'https://vsmart.ru/',
  },
  {
    name: 'SBER',
    type: 'Bank / Financial services',
    role: 'UX/UI designer',
    company: 'escape',
    platform: 'Mobile',
    years: '2018',
    link: 'https://www.sberbank.ru/',
  },
  {
    name: 'GTRS',
    type: 'Recruitment ',
    role: 'Junior UX designer',
    company: 'escape',
    platform: 'Web & Mobile',
    years: '2018',
  },
]
