import { RouteDefinition } from '@solidjs/router'
import { projects } from '@/data/projects'
import { CasesPage } from '@/pages/Cases'
import { ProductsPage } from '@/pages/Products'
import { ExperiencePage } from '@/pages/Experience'
import { LifePage } from '@/pages/Life'

const projectRoutes: RouteDefinition[] = projects.map(project => ({
  path: `/case/${project.id}`,
  component: () => <project.component project={project} />,
}))

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: CasesPage,
    children: [{ path: '/', component: () => null }, ...projectRoutes],
  },
  { path: '/products', component: ProductsPage },
  { path: '/experience', component: ExperiencePage },
  { path: '/life', component: LifePage },
  { path: '*', component: () => '404 Not Found' },
]
