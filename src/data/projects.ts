import { Project } from '@/models'
import { DashboardCasePage } from '@/pages/case/DashboardCasePage'
import { MonitoringCasePage } from '@/pages/case/MonitoringCasePage'
import { CRMDataImportCasePage } from '@/pages/case/CRMDataImportCasePage'
import { MobileCRMDiagnosisCasePage } from '@/pages/case/MobileCRMDiagnosisCasePage'
import { AutomationWorkflowsCasePage } from '@/pages/case/AutomationWorkflowsCasePage'
import { PortOperationsCasePage } from '@/pages/case/PortOperationsCasePage'

export const projects: Project[] = [
  {
    id: 'crm-data-import',
    name: 'CRM Data Import',
    company: 'efficy',
    product: 'Maxo',
    tags: ['CRM', 'Design System', 'B2B', 'SaaS'],
    tabs: [
      { id: 'overview', name: 'Overview' },
      { id: 'plan', name: 'Plan' },
      { id: 'success-criteria', name: 'Success criteria' },
      { id: 'process', name: 'Process' },
      { id: 'outcome', name: 'Outcome' },
      { id: 'conclusions', name: 'Conclusions' },
    ],
    thumbnail: '/cases/crm-data-import.png',
    component: CRMDataImportCasePage,
    link: 'https://www.efficy.com/',
  },
  {
    id: 'monitoring',
    name: 'Monitoring',
    company: 'tis',
    tags: ['Healthcare', 'Research', 'Dashboard'],
    tabs: [],
    thumbnail: '/cases/monitoring.png',
    component: MonitoringCasePage,
    externalLink:
      'https://www.behance.net/gallery/137361571/Interface-for-remote-monitoring-system',
  },
  {
    id: 'automation-workflows',
    name: 'Automation workflows',
    company: 'efficy',
    product: 'Maxo',
    tags: ['UX/UX', 'Enterprise', 'Automation'],
    tabs: [
      { id: 'overview', name: 'Overview' },
      { id: 'plan', name: 'Plan' },
      { id: 'success-criteria', name: 'Success criteria' },
      { id: 'process', name: 'Process' },
      { id: 'outcome', name: 'Outcome' },
      { id: 'conclusions', name: 'Conclusions' },
    ],
    thumbnail: '/cases/scalable-automation.png',
    component: AutomationWorkflowsCasePage,
    link: 'https://www.efficy.com/',
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    company: 'dit',
    tags: [],
    tabs: [],
    thumbnail: '/cases/dashboard.png',
    component: DashboardCasePage,
    show: false,
  },
  {
    id: 'port-operations',
    name: 'Port Operations',
    company: 'vmtp',
    tags: ['Logistics', 'Workflow', 'UX', 'Mobile & Web', 'Operations'],
    tabs: [
      { id: 'overview', name: 'Overview' },
      { id: 'awards', name: 'Awards' },
      { id: 'process', name: 'Process' },
      { id: 'outcome', name: 'Outcome' },
      { id: 'conclusions', name: 'Conclusions' },
    ],
    thumbnail: '/cases/port-operations.png',
    component: PortOperationsCasePage,
    link: 'https://en.vmtp.ru/',
  },
  {
    id: 'mobile-crm-diagnosis',
    name: 'Mobile CRM – Diagnosis',
    company: 'efficy',
    product: 'Maxo',
    tags: ['Competitor Analysis', 'Product Growth'],
    tabs: [
      { id: 'overview', name: 'Overview' },
      { id: 'conclusions', name: 'Conclusions' },
    ],
    thumbnail: '/cases/mobile-crm-diagnosis.png',
    component: MobileCRMDiagnosisCasePage,
    link: 'https://apps.apple.com/us/app/maxo/id6470627274',
  },
]

export const filteredProjects = projects.filter(
  project => project.show !== false,
)
export const fullyFilteredProjects = projects.filter(
  project => project.show !== false && !project.externalLink,
)
