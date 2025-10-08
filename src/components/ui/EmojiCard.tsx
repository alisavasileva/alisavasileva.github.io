import { css } from '@style/css'
import { Component, JSX } from 'solid-js'
import { Card } from './Card'

interface EmojiCardProps {
  emoji: string
  title: string
  children?: JSX.Element
}

export const EmojiCard: Component<EmojiCardProps> = props => {
  return (
    <Card class={styles.card}>
      <div class={styles.emoji}>{props.emoji}</div>
      <div class={styles.title}>{props.title}</div>
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
  emoji: css({
    fontSize: '32px',
  }),
  title: css({
    textStyle: 'bold',
  }),
}
