import { Component, JSX } from 'solid-js'
import { cva } from '@style/css'

interface OverlapProps {
  items: [JSX.Element, JSX.Element]
}

export const Overlap: Component<OverlapProps> = props => {
  return <div>
    <div class={styles.overlapItem({ item: 1 })}>{props.items[0]}</div>
    <div class={styles.overlapItem({ item: 2 })}>{props.items[1]}</div>
  </div>
}

const styles = {
  overlapItem: cva({
    base: {
      position: 'relative',
      width: '70%',
    },
    variants: {
      item: {
        1: {
          zIndex: 1,
        },
        2: {
          zIndex: 2,
          ml: '30%',
          mt: '-20%',
        },
      },
    }
  }),
}
