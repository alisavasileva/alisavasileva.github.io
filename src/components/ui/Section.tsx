import { Component, JSX } from 'solid-js'
import { cva, cx } from '@style/css'

interface SectionProps {
  children: JSX.Element
  class?: string
  variant?: 'default' | 'spaced'
  width?: 'default' | 'wide' | 'full'
  ref?: HTMLElement
  style?: JSX.CSSProperties
}

export const Section: Component<SectionProps> = props => {
  return (
    <section
      ref={props.ref}
      class={cx(
        styles.section({
          variant: props.variant,
          width: props.width,
        }),
        props.class,
      )}
      style={props.style}
    >
      {props.children}
    </section>
  )
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
        },
      },
      width: {
        default: {},
        wide: {
          width: '1700px',
        },
        full: {
          width: '100%',
        },
      },
    },
  }),
}
