import { Component, JSX } from 'solid-js'
import { css, cx } from '@style/css'

interface ColumnsProps {
  number: 2 | 3 | 4
  children?: JSX.Element
  class?: string
}

export const Columns: Component<ColumnsProps> = props => {
  return <div
    class={cx(styles.columns, props.class)}
    style={{ '--columns-number': props.number }}
  >
    {props.children}
  </div>
}

const styles = {
  columns: css({
    display: 'grid',
    gap: 'spacing-16',
    gridTemplateColumns: 'repeat(var(--columns-number), 1fr)',
  }),
}
