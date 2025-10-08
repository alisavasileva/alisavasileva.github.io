import { css } from '@style/css'
import { Component } from 'solid-js'
import { Card } from './Card'

interface AwardCardProps {
  title: string
  award: string
  image: string
}

export const AwardCard: Component<AwardCardProps> = props => {
  return (
    <div class={styles.card}>
      <img class={styles.image} src={props.image} alt={props.title + 'logo'} />
      <div>
        <div class={styles.title}>{props.title}</div>
        <div class={styles.award}>{props.award}</div>
      </div>
    </div>
  )
}

const styles = {
  card: css({
    display: 'flex',
    p: 'spacing-16',
    gap: 'spacing-16',
    alignItems: 'center',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 12px 16px -2px #00274A0F, 0 4px 16px 0 #00274A14',
  }),
  title: css({
    color: 'primary',
    textStyle: 'bold',
  }),
  award: css({
    color: 'secondary',
    fontSize: '12px',
  }),
  image: css({
    height: '44px',
  }),
}
