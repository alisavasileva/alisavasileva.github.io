import { css } from '@style/css'
import { Component, createMemo, createSignal, For, JSX } from 'solid-js'
import { Card } from './Card'
import { Columns } from './Columns'
import { Tabs } from './Tabs'

interface CardTabGroupProps {
  cards: {
    title: string
    description: string
    content: JSX.Element
  }[]
}

export const CardTabGroup: Component<CardTabGroupProps> = props => {
  const [selectedCard, setSelectedCard] = createSignal<number>(0)
  const content = () => props.cards[selectedCard()]?.content
  const number = () => Math.min(props.cards.length, 4) as 1 | 2 | 3 | 4
  const tabs = createMemo(() =>
    props.cards.map((card, i) => ({ id: `${i}`, name: card.title })),
  )

  return (
    <>
      <Tabs
        class={styles.tabs}
        tabs={tabs()}
        active={`${selectedCard()}`}
        onChange={tab => setSelectedCard(parseInt(tab))}
        variant="block"
      />
      <Columns number={number()} breakpoint="lg" class={styles.cardTabs}>
        <For each={props.cards}>
          {(card, i) => (
            <Card
              class={styles.card}
              selected={selectedCard() === i()}
              clickable
              onClick={() => setSelectedCard(i())}
            >
              <div class={styles.cardTitle}>{card.title}</div>
              <p>{card.description}</p>
            </Card>
          )}
        </For>
      </Columns>
      <Card selected>{content()}</Card>
    </>
  )
}

const styles = {
  tabs: css({
    display: 'flex',
    lg: {
      display: 'none',
    },
  }),
  cardTabs: css({
    display: 'none',
    lg: {
      display: 'grid',
    },
  }),
  cardTitle: css({ textStyle: 'bold' }),
  card: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 'spacing-8',
  }),
}
