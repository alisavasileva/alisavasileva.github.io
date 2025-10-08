import { css } from '@style/css'
import { Component, createMemo, JSX } from 'solid-js'
import { Dynamic } from 'solid-js/web'

interface ButtonPropsBase {
  children: JSX.Element
  onClick?: () => void
}

interface ButtonAProps {
  tag: 'a'
  href?: string
  download?: string
  target?: string
}

interface ButtonDivProps {
  tag: 'div'
}

type ButtonProps = ButtonPropsBase & (ButtonAProps | ButtonDivProps)

export const Button: Component<ButtonProps> = props => {
  const tag = createMemo(() => props.tag ?? 'div')
  const tagProps = createMemo(() =>
    props.tag === 'a'
      ? { href: props.href, download: props.download, target: props.target }
      : {},
  )

  return (
    <Dynamic
      component={tag()}
      onClick={props.onClick}
      class={styles.button}
      {...tagProps()}
    >
      {props.children}
    </Dynamic>
  )
}

const styles = {
  button: css({
    display: 'inline-block',
    py: 'spacing-8',
    px: 'spacing-16',
    borderRadius: '8px',
    backgroundColor: 'grey.500',
    color: '#000000',
    textDecoration: 'none',
    textAlign: 'center',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'grey.600',
    },
  }),
}
