import { type Component } from 'solid-js'
import '@style/styles.css'
import '@/styles/global.css'
import { Router } from '@solidjs/router'
import { RootLayout } from '@/components/layout/RootLayout'
import { routes } from '@/routes'

const App: Component = () => {
  return <Router root={RootLayout}>{routes}</Router>
}

export default App
