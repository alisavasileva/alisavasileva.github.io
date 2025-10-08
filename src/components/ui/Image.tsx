import { Component, JSX } from 'solid-js'
import { cva, cx } from '@style/css'

interface ImageProps {
  src?: string
  alt?: string
  class?: string
  noStyle?: boolean
}

export const Image: Component<ImageProps> = props => {
  return (
    <img
      class={cx(styles.image({ noStyle: props.noStyle }), props.class)}
      src={props.src}
      alt={props.alt}
    />
  )
}

const styles = {
  image: cva({
    base: {
      borderRadius: '8px',
      boxShadow: '0 2.81px 8.43px 0 #0000001A, 0 0 2.81px 0 #00000014',
    },
    variants: {
      noStyle: {
        true: {
          borderRadius: '0',
          boxShadow: 'none',
        },
      },
    },
  }),
}
