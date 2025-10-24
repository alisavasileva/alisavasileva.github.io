import { Component, JSX } from 'solid-js'
import { cva, cx } from '@style/css'

interface SectionProps {
  children: JSX.Element
  class?: string
  variant?: 'default' | 'spaced'
}

export const Section: Component<SectionProps> = props => {
  return <section class={cx(styles.section({ variant: props.variant }), props.class)}>{props.children}</section>
}

const styles = {
  section: cva({
    base: {
      width: '1080px',
      maxWidth: 'calc(100% - var(--spacing-spacing-24) * 2)',
      margin: '0 auto',
    },
    variants: {
      variant: {
        default: {},
        spaced: {
          display: 'flex',
          flexDirection: 'column',
          gap: 'spacing-24',
        }
      }
    }
  }),
}
