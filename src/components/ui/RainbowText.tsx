import { Component, JSX } from 'solid-js'
import { css, cx } from '@style/css'

interface RainbowTextProps {
  children: JSX.Element
  class?: string
}

export const RainbowText: Component<RainbowTextProps> = props => {
  return (
    <span class={cx(styles.rainbowText, props.class)}>{props.children}</span>
  )
}

const styles = {
  rainbowText: css({
    display: 'inline-block',
    background:
      'linear-gradient(to right, var(--colors-blue), var(--colors-magenta))',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }),
}
