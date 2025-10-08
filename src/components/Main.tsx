import { Tabs } from '@/components/ui/Tabs'
import { css } from '@style/css'
import { Component, createSignal } from 'solid-js'
import { RouteSectionProps, useLocation } from '@solidjs/router'
import { Tab } from '@/models'

export const Main: Component<RouteSectionProps> = props => {
  const location = useLocation()
  const tabs = [
    { id: '', path: '/', name: 'Cases' },
    { id: 'products', path: '/products', name: 'Products' },
    { id: 'experience', path: '/experience', name: 'Experience' },
    { id: 'life', path: '/life', name: 'Life' },
  ] as const satisfies Tab[]

  const [activeTab, setActiveTab] = createSignal(
    tabs.find(tab =>
      tab.path === location.pathname.split('/')[1]
        ? `/${location.pathname.split('/')[1]}`
        : '/',
    )?.id,
  )

  return (
    <div class={styles.app}>
      <header>
        <hgroup>
          <h1 class={styles.header}>
            Hej!
            <br />
            I’m Alisa Vasileva – Product designer
          </h1>
          <div class={styles.alisa}>
            <img src="/alisa-smile.png" class="smile" />
            <img src="/alisa.png" />
          </div>
          <div class={styles.subheader}>
            <div class={styles.subheaderMain}>7 years of:</div>
            <ul class={styles.subheaderItems}>
              <li class={styles.subheaderItem}>UX/UI</li>
              <li class={styles.subheaderItem}>Design system</li>
              <li class={styles.subheaderItem}>User test</li>
              <li class={styles.subheaderItem}>Business goals</li>
            </ul>
          </div>
          <div class={styles.tagline}>Turning complexity into clarity.</div>
        </hgroup>
        <Tabs
          class={styles.tabs}
          tabs={tabs}
          active={activeTab()}
          onChange={setActiveTab}
        />
      </header>
      <main>{props.children}</main>
    </div>
  )
}

const styles = {
  app: css({
    fontFamily: 'main',
    textAlign: 'center',
    my: '90px',
    color: 'primary',
  }),
  header: css({
    textStyle: 'title',
  }),
  subheader: css({
    display: 'flex',
    gap: '16px',
    textStyle: 'subtitle',
    justifyContent: 'center',
    mb: '30px',
  }),
  subheaderMain: css({
    color: 'blue',
    fontWeight: 500,
  }),
  subheaderItems: css({
    display: 'flex',
    gap: '24px',
  }),
  subheaderItem: css({
    color: 'secondary',
  }),
  tagline: css({
    display: 'inline-block',
    // textStyle: '',
    fontSize: '24px',
    fontWeight: 600,
    background:
      'linear-gradient(to right, var(--colors-blue), var(--colors-magenta))',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    mb: '80px',
  }),
  tabs: css({
    mb: '40px',
  }),
  alisa: css({
    position: 'relative',
    margin: '1rem auto',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    border: '2px solid var(--colors-blue)',
    background: 'grey.500',

    '& img': {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: 'auto',
      borderRadius: '50%',
    },

    '& .smile': {
      opacity: 0,
      zIndex: 1,
      borderRadius: '0 0 50% 50%',
    },

    _hover: {
      '& .smile': {
        opacity: 1,
      },
    }
  }),
}
