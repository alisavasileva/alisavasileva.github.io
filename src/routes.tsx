import { RouteDefinition } from '@solidjs/router'
import { projects } from '@/data/projects'
import { CasesPage } from '@/pages/Cases'
import { ProductsPage } from '@/pages/Products'
import { ExperiencePage } from '@/pages/Experience'
import { LifePage } from '@/pages/Life'
import { MainLayout } from './components/layout/MainLayout'
import { CasesLayout } from './components/layout/CasesLayout'

const caseRoutes: RouteDefinition[] = projects.map(project => ({
  path: `/${project.id}`,
  component: () => <project.component project={project} />,
}))

export const routes: RouteDefinition[] = [
  {
    path: '/case/',
    component: CasesLayout,
    children: [...caseRoutes],
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '/', component: CasesPage },
      { path: '/products', component: ProductsPage },
      { path: '/experience', component: ExperiencePage },
      { path: '/life', component: LifePage },
      { path: '*', component: () => '404 Not Found' },
    ],
  }
]
