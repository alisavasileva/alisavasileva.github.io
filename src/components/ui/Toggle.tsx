import { Component } from 'solid-js'
import { css, cva, cx } from '@style/css'

interface ToggleProps {
  class?: string
  label?: string
  on: boolean
  onChange: (on: boolean) => void
}

export const Toggle: Component<ToggleProps> = props => {
  return (
    <div
      class={cx(styles.container, props.class)}
      onClick={() => props.onChange(!props.on)}
    >
      <div class={styles.toggle({ on: props.on })}>
        <div class={styles.toggleDot({ on: props.on })} />
      </div>
      {props.label && <div class={styles.label}>{props.label}</div>}
    </div>
  )
}

const styles = {
  container: css({
    display: 'flex',
    gap: 'spacing-8',
    alignItems: 'center',
    cursor: 'pointer',
  }),
  toggle: cva({
    base: {
      position: 'relative',
      borderRadius: '12px',
      width: '44px',
      height: '24px',
      background: '#DDE4EB',
      transition: 'background 0.2s ease',
    },
    variants: {
      on: {
        true: {
          background: '#007AFF',
        },
      },
    },
  }),
  toggleDot: cva({
    base: {
      position: 'absolute',
      top: '2px',
      left: '2px',
      background: 'white',
      borderRadius: '50%',
      height: '20px',
      width: '20px',
      boxShadow: '0 1px 2px 0px #1018280F, 0 1px 3px 0px #1018281A',
      transition: 'transform 0.2s ease',
    },
    variants: {
      on: {
        true: {
          transform: 'translateX(20px)',
        },
      },
    },
  }),
  label: css({}),
}
