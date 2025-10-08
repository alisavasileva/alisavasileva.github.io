import { Component, JSX } from 'solid-js'
import { cva, cx } from '@style/css'

interface ColumnsProps {
  number: 1 | 2 | 3 | 4
  breakpoint?: 'sm' | 'md' | 'lg' | '4-2-1' | 'none'
  children?: JSX.Element
  class?: string
}

export const Columns: Component<ColumnsProps> = props => {
  return (
    <div
      class={cx(styles.columns({ breadkpoint: props.breakpoint }), props.class)}
      style={{ '--columns-number': props.number }}
    >
      {props.children}
    </div>
  )
}

const styles = {
  columns: cva({
    base: {
      display: 'grid',
      gap: 'spacing-16',
      gridTemplateColumns: '1fr',
    },
    variants: {
      breadkpoint: {
        sm: {
          sm: {
            gridTemplateColumns: 'repeat(var(--columns-number), 1fr)',
          },
        },
        md: {
          md: {
            gridTemplateColumns: 'repeat(var(--columns-number), 1fr)',
          },
        },
        lg: {
          lg: {
            gridTemplateColumns: 'repeat(var(--columns-number), 1fr)',
          },
        },
        '4-2-1': {
          md: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          lg: {
            gridTemplateColumns: 'repeat(4, 1fr)',
          },
        },
        none: {
          gridTemplateColumns: 'repeat(var(--columns-number), 1fr)',
        },
      },
    },
    defaultVariants: {
      breadkpoint: 'none',
    },
  }),
}
