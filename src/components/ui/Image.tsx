import { Component, JSX } from 'solid-js'
import { css, cx } from '@style/css'

interface ImageProps {
  src?: string
  alt?: string
  class?: string
}

export const Image: Component<ImageProps> = props => {
  return <img class={cx(styles.image, props.class)} src={props.src} alt={props.alt} />
}

const styles = {
  image: css({
    borderRadius: '8px',
    boxShadow: '0 2.81px 8.43px 0 #0000001A, 0 0 2.81px 0 #00000014',
  }),
}
