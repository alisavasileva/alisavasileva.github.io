import { Component, createSignal } from 'solid-js'
import { css, cva, cx } from '@style/css'

interface ToggleProps {
  class?: string
  label?: string
}

export const Toggle: Component<ToggleProps> = props => {
  const [on, setOn] = createSignal(false)

  return <div class={cx(styles.container, props.class)} onClick={() => setOn(!on())}>
    <div class={styles.toggle({ on: on() })}>
      <div class={styles.toggleDot({ on: on() })} />
    </div>
    {props.label && <div class={styles.label}>{props.label}</div>}
  </div>
}

const styles = {
  container: css({
    display: 'flex',
    gap: 'spacing-8'
  }),
  toggle: cva({
    base: {
      position: 'relative',
      borderRadius: '12px',
      width: '44px',
      height: '24px',
      background: '#DDE4EB',
      cursor: 'pointer',
    },
    variants: {
      on: {
        true: {
          background: '#007AFF'
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
  label: css({
  }),
}
