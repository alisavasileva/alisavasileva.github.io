import { Tabs } from '@/components/ui/Tabs'
import { css } from '@style/css'
import { Component, createSignal } from 'solid-js'
import { RouteSectionProps, useLocation } from '@solidjs/router'
import { Tab } from '@/models'
import { RainbowText } from '../ui/RainbowText'
import { Section } from '../ui/Section'

export const MainLayout: Component<RouteSectionProps> = props => {
  const location = useLocation()
  const tabs = [
    { id: '', path: '/', name: 'Cases' },
    { id: 'products', path: '/products', name: 'Products' },
    { id: 'experience', path: '/experience', name: 'Experience' },
    { id: 'life', path: '/life', name: 'Life' },
    { id: 'cv', path: '/cv', name: 'CV' },
  ] as const satisfies Tab[]

  const [activeTab, setActiveTab] = createSignal<string | undefined>(
    tabs.findLast(tab => (location.pathname || '/').startsWith(tab.path))?.id,
  )

  return (
    <div class={styles.app}>
      <header>
        <Section>
          <hgroup>
            <h1 class={styles.header}>
              Hej!
              <br />
              I’m Alisa Vasileva – Product designer
            </h1>
            <div class={styles.subheader}>
              <div class={styles.subheaderMain}>7 years of:</div>
              <ul class={styles.subheaderItems}>
                <li class={styles.subheaderItem}>UX/UI</li>
                <li class={styles.subheaderItem}>Design system</li>
                <li class={styles.subheaderItem}>User test</li>
                <li class={styles.subheaderItem}>Business goals</li>
              </ul>
            </div>
            <div class={styles.tagline}>
              <RainbowText>Turning complexity into clarity.</RainbowText>
            </div>
          </hgroup>
          <Tabs
            class={styles.tabs}
            tabs={tabs}
            active={activeTab()}
            onChange={setActiveTab}
            variant="block"
          />
        </Section>
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
    display: 'none',
    gap: '16px',
    textStyle: 'subtitle',
    justifyContent: 'center',
    mb: '30px',

    lg: {
      display: 'flex',
    },
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
    fontSize: '24px',
    fontWeight: 600,
    mb: '80px',
  }),
  tabs: css({
    mb: '40px',
  }),
}
