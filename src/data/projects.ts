import { Project } from '@/models'
import { DashboardCasePage } from '@/pages/case/Dashboard'
import { MonitoringCasePage } from '@/pages/case/Monitoring'
import { SmartImportCasePage } from '@/pages/case/SmartImport'

export const projects: Project[] = [
  {
    id: 'smart-import',
    name: 'Smart Import',
    company: 'efficy',
    product: 'Maxo',
    tags: ['Product design', 'UX/UI', 'Enterprise', 'Efficy'],
    thumbnail: '/projects/smart-import.png',
    component: SmartImportCasePage,
  },
  {
    id: 'monitoring',
    name: 'Monitoring',
    company: 'tis',
    tags: [],
    thumbnail: '/projects/monitoring.png',
    component: MonitoringCasePage,
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    company: 'dit',
    tags: [],
    thumbnail: '/projects/dashboard.png',
    component: DashboardCasePage,
  },
]
