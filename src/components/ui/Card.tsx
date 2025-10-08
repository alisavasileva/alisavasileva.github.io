import { Component, JSX } from 'solid-js'
import { cva, cx } from '@style/css'

interface CardProps {
  children: JSX.Element
  class?: string
  theme: 'mist' | undefined
}

export const Card: Component<CardProps> = props => {
  return <div class={cx(styles.card({ theme: props.theme }), props.class)}>{props.children}</div>
}

const styles = {
  card: cva({
    base: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 12px 16px -2px #00274A0F, 0 4px 16px 0 #00274A14',
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
