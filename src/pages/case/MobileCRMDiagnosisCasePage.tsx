import { Card } from '@/components/ui/Card'
import { Columns } from '@/components/ui/Columns'
import { Section } from '@/components/ui/Section'
import { ProjectComponentProps } from '@/models'
import { css } from '@style/css'
import { Image } from '@/components/ui/Image'
import { Component } from 'solid-js'
import { RainbowText } from '@/components/ui/RainbowText'
import { ScrollTarget } from '@/components/ui/ScrollTarget'
import { Icon } from '@/components/ui/Icon'

export const MobileCRMDiagnosisCasePage: Component<
  ProjectComponentProps
> = props => {
  return (
    <>
      <ScrollTarget id="overview" headerRef={props.headerRef} />
      <Columns class={styles.main} number={2} breakpoint="lg">
        <Image src="/cases/mobile-crm-diagnosis/phones.png" noStyle />
        <div>
          <a
            class={styles.heading}
            href="https://www.figma.com/board/alHbTMhRFMUtg9vs81FQ5e/Maxo-Mobile-Context-Diagnosis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RainbowText>Explore full FigJam board</RainbowText>
            <Icon iconName="arrow-up-right-from-square" size="small" />
          </a>
          <Card class={css({ mt: 'spacing-16' })}>
            <p>
              While working on the Efficy Maxo CRM, I noticed that the mobile
              experience was underused and lacked clear positioning compared to
              the web version. Yet, for many users — especially sales
              representatives, field technicians, and small business owners —
              mobile access is where CRM delivers its real value.
            </p>
            <p class={css({ mt: 'spacing-16' })}>
              To define what the mobile app should enable and how it could
              differentiate from competitors, I initiated a context and
              competitive diagnosis. The goal was to understand how
              professionals use CRM on the go, what gaps exist in the current
              experience, and which directions would bring the most value to
              Efficy’s users and business.
            </p>
          </Card>
        </div>
      </Columns>
      <ScrollTarget id="conclusions" headerRef={props.headerRef} />
      <h2 class={styles.sectionTitle}>Conclusions</h2>
      <Columns class={styles.conclusions} number={4} breakpoint="4-2-1">
        <Card class={styles.card}>
          <div class={styles.cardTitle}>Mobile CRM is now essential.</div>
          <p>
            It should support full customer management and real-time updates —
            not just mirror the web version.
          </p>
        </Card>
        <Card class={styles.card}>
          <div class={styles.cardTitle}>Value comes from simplicity.</div>
          <p>
            Users need quick insights, instant notes, and easy access to key
            contacts.
          </p>
        </Card>
        <Card class={styles.card}>
          <div class={styles.cardTitle}>
            Competitors focus on AI and usability.
          </div>
          <p>
            Efficy can stand out through tighter web integration and tailored
            B2B workflows.
          </p>
        </Card>
        <Card class={styles.card}>
          <div class={styles.cardTitle}>
            Main opportunity for product growth:
          </div>
          <p>
            Redesign mobile around real use cases — sales on the move, field
            work, follow-ups — with reliable offline sync.
          </p>
        </Card>
      </Columns>
    </>
  )
}

const styles = {
  main: css({
    display: 'flex',
    py: 'spacing-32',
    gap: 'spacing-64',
    alignItems: 'center',
  }),
  heading: css({
    display: 'flex',
    textStyle: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'spacing-8',
    color: 'magenta',

    _hover: {
      filter: 'brightness(0.75)',
    },
  }),
  card: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 'spacing-8',
  }),
  sectionTitle: css({
    textStyle: 'sectionTitle',
  }),
  conclusions: css({
    mt: 'spacing-32',
    mb: 'spacing-64',
  }),
  cardTitle: css({ textStyle: 'bold' }),
}
