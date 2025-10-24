import { Project } from '@/models'
import { DashboardCasePage } from '@/pages/case/Dashboard'
import { MonitoringCasePage } from '@/pages/case/Monitoring'
import { CRMDataImportCasePage } from '@/pages/case/CRMDataImportCasePage'

export const projects: Project[] = [
  {
    id: 'crm-data-import',
    name: 'CRM Data Import',
    company: 'efficy',
    product: 'Maxo',
    tags: ['Product design', 'UX/UI', 'Enterprise', 'Efficy'],
    thumbnail: '/cases/crm-data-import.png',
    component: CRMDataImportCasePage,
  },
  {
    id: 'monitoring',
    name: 'Monitoring',
    company: 'tis',
    tags: [],
    thumbnail: '/cases/monitoring.png',
    component: MonitoringCasePage,
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    company: 'dit',
    tags: [],
    thumbnail: '/cases/dashboard.png',
    component: DashboardCasePage,
  },
]
