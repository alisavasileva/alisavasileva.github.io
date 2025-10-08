import { css } from '@style/css'
import { Component, JSX, Show } from 'solid-js'
import { Card } from './Card'

interface PlanCardProps {
  preheader?: string
  title?: string
  children?: JSX.Element
}

export const PlanCard: Component<PlanCardProps> = props => {
  return (
    <Card class={styles.card}>
      <Show when={props.preheader}>
        <div class={styles.cardTitleBlue}>{props.preheader}</div>
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
  cardTitleBlue: css({ textStyle: 'bold', color: 'blue' }),
}
