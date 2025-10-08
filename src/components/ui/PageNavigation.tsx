import { Component, Show } from 'solid-js'
import { Section } from './Section'
import { Icon } from './Icon'
import { css, cx } from '@style/css'

interface PageNavigationProps {
  back: () => void
  next: () => void
  backText: string
  nextText: string
  class?: string
  ref?: HTMLElement
  width?: 'default' | 'wide' | 'full'
  title?: string
}

export const PageNavigation: Component<PageNavigationProps> = props => {
  return (
    <Section
      class={cx(styles.navigation, props.class)}
      ref={props.ref}
      width={props.width}
    >
      <div class={styles.container}>
        <div class={styles.button} onClick={props.back}>
          <Icon iconName="arrow-left" size="small" prefix="fas" />
          <span class={styles.text}>{props.backText}</span>
        </div>
      </div>
      <Show when={props.title}>
        <div class={styles.title}>{props.title}</div>
      </Show>
      <div class={cx(styles.container, css({ textAlign: 'right' }))}>
        <div class={styles.button} onClick={props.next}>
          <span class={styles.text}>Next: {props.nextText}</span>
          <Icon iconName="arrow-right" size="small" prefix="fas" />
        </div>
      </div>
    </Section>
  )
}

const styles = {
  navigation: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  container: css({
    flexBasis: '100px',
    flexGrow: '1',
    textAlign: 'left',
  }),
  text: css({
    display: 'none',
    lg: {
      display: 'block',
    },
  }),
  button: css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'spacing-24',
    px: 'spacing-8',
    py: 'spacing-4',
    borderRadius: '8px',
    cursor: 'pointer',
    _hover: {
      background: '#F9FAFB',
    },
  }),
  title: css({
    flexGrow: '1',
    textAlign: 'center',
    textStyle: 'bold',
  }),
}
