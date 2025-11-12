import { Component, JSX } from 'solid-js'
import { cva, cx } from '@style/css'

interface CardProps {
  children: JSX.Element
  class?: string
  selected?: boolean
  clickable?: boolean
  noPadding?: boolean
  onClick?: () => void
  type?: 'default' | 'error'
}

export const Card: Component<CardProps> = props => {
  return (
    <div
      class={cx(
        styles.card({
          selected: !!props.selected,
          clickable: !!props.clickable,
          noPadding: !!props.noPadding,
          type: props.type ?? 'default',
        }),
        props.class,
      )}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

const styles = {
  card: cva({
    base: {
      position: 'relative',
      borderRadius: '12px',
      background: '#F8FAFC',
      border: '1px solid #E4E6EE',
      p: 'spacing-24',
    },
    variants: {
      selected: {
        true: {
          background: '#E9EDF2',
        },
      },
      clickable: {
        true: {
          cursor: 'pointer',

          _hover: {
            background: '#E9EDF2',
          },
        },
      },
      noPadding: {
        true: {
          p: '0',
        },
      },
      type: {
        error: {
          borderColor: 'error',
          background: '#FFE9E8',
        },
        default: {},
      },
    },
  }),
}
