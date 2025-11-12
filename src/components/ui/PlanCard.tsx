import { css, cva } from '@style/css'
import { Component, JSX, Show } from 'solid-js'
import { Card } from './Card'

interface PlanCardProps {
  preheader?: string
  title?: string
  children?: JSX.Element
  type?: 'default' | 'error'
}

export const PlanCard: Component<PlanCardProps> = props => {
  return (
    <Card class={styles.card} type={props.type}>
      <Show when={props.preheader}>
        <div class={styles.cardTitleBlue({ type: props.type ?? 'default' })}>{props.preheader}</div>
      </Show>
      <Show when={props.title}>
        <div class={styles.cardTitle}>{props.title}</div>
      </Show>
      {props.children}
    </Card>
  )
}

const styles = {
  card: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 'spacing-8',
  }),
  cardTitle: css({ textStyle: 'bold' }),
  cardTitleBlue: cva({
    base: {
      textStyle: 'bold',
      color: 'blue'
    },
    variants: {
      type: {
        error: {
          color: 'error',
        },
        default: {},
      }
    }
  }),
}
