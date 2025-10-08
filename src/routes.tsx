import { RouteDefinition } from '@solidjs/router'
import { CasesPage } from '@/pages/CasesPage'
import { ProductsPage } from '@/pages/ProductsPage'
import { ExperiencePage } from '@/pages/ExperiencePage'
import { LifePage } from '@/pages/LifePage'
import { MainLayout } from './components/layout/MainLayout'
import { CasesLayout } from './components/layout/CasesLayout'
import { PostersPage } from './pages/life/PostersPage'
import { PhotographyPage } from './pages/life/PhotographyPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { CVPage } from './pages/CVPage'
import { DogPage } from './pages/life/DogPage'

export const routes: RouteDefinition[] = [
  {
    path: '/case/:id',
    component: CasesLayout,
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '/', component: CasesPage },
      { path: '/products', component: ProductsPage },
      { path: '/experience', component: ExperiencePage },
      { path: '/life', component: LifePage },
      { path: '/cv', component: CVPage },
      { path: '*', component: NotFoundPage },
    ],
  },
  {
    path: '/posters',
    component: PostersPage,
  },
  {
    path: '/photography',
    component: PhotographyPage,
  },
  {
    path: '/dog',
    component: DogPage,
  },
]
