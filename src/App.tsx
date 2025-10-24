import { type Component } from 'solid-js'
import '@style/styles.css'
import '@/styles/global.css'
import { Router } from '@solidjs/router'
import { RootLayout } from '@/components/layout/RootLayout'
import { routes } from '@/routes'
import { css } from '@style/css'

const App: Component = () => {
  return (
    <>
      <div class={styles.notReady}>
        <div>Hey! How did you find this page?</div>
        <div>
          This page isn't ready yet but please see my{' '}
          <a href="https://www.linkedin.com/in/alisa-vasileva-3100621a8/">
            LinkedIn
          </a>{' '}
          and check back soon!
        </div>
      </div>
      <Router root={(RootLayout)}>{routes}</Router>
    </>
  )
}

export default App

const styles = {
  notReady: css({
    position: 'fixed',
    background: 'black',
    padding: '8px 16px',
    color: 'white',
    top: '0',
    left: '0',
    right: '0',
    textStyle: 'tab',
    textAlign: 'center',
    zIndex: 1000,

    '& a': {
      textDecoration: 'underline',
    },
  }),
}
