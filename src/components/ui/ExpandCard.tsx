import { Component, createSignal, JSX } from 'solid-js'
import { css, cva } from '@style/css'
import { Icon } from './Icon'
import { Card } from './Card'

interface CardProps {
  title: JSX.Element
  children: JSX.Element
  class?: string
}

export const ExpandCard: Component<CardProps> = props => {
  const [expanded, setExpanded] = createSignal(false)

  return (
    <Card class={styles.card} noPadding>
      <div class={styles.header} onClick={() => setExpanded(!expanded())}>
        <div>{props.title}</div>
        <Icon
          iconName="chevron-down"
          class={styles.arrow({ expanded: expanded() })}
          size="small"
        />
      </div>
      {expanded() && <div class={styles.main}>{props.children}</div>}
    </Card>
  )
}

const styles = {
  card: css({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  }),
  header: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 'spacing-16',
    borderRadius: '12px',
    cursor: 'pointer',
  }),
  main: css({
    px: 'spacing-16',
    pb: 'spacing-16',
  }),
  arrow: cva({
    base: {
      transition: 'transform 0.2s ease-in-out',
    },
    variants: {
      expanded: {
        true: {
          transform: 'rotate(-180deg)',
        },
        false: {
          transform: 'rotate(0deg)',
        },
      },
    },
  }),
}
