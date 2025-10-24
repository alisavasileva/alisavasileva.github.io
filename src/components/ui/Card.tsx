import { Component, JSX } from 'solid-js'
import { cva, cx } from '@style/css'

interface CardProps {
  children: JSX.Element
  class?: string
  theme?: 'mist' | undefined
}

export const Card: Component<CardProps> = props => {
  return <div class={cx(styles.card({ theme: props.theme }), props.class)}>{props.children}</div>
}

const styles = {
  card: cva({
    base: {
      position: 'relative',
      borderRadius: '12px',
      background: '#F8FAFC',
      border: '1px solid #E4E6EE',
      padding: 'spacing-24',
    },
    variants: {
      theme: {
        mist: {
          background: 'mist',
          backdropFilter: 'blur(5px)',
        },
        undefined: {},
      },
    },
  }),
}
