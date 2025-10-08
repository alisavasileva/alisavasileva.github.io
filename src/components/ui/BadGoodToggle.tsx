import { Component, createMemo, createSignal, For, JSX } from 'solid-js'
import { Card } from './Card'
import { Toggle } from './Toggle'
import { css, cva } from '@style/css'

interface BadGoodData {
  title: JSX.Element
  bullets: JSX.Element[]
  content: JSX.Element
}

interface BadGoodToggleProps {
  bad: BadGoodData
  good: BadGoodData
}

export const BadGoodToggle: Component<BadGoodToggleProps> = props => {
  const [goodVersion, setGoodVersion] = createSignal<boolean>(false)

  const data = createMemo(() => (goodVersion() ? props.good : props.bad))
  const bulletType = createMemo(() => (goodVersion() ? '✅' : '❌'))

  return (
    <>
      <Card class={styles.problemCard}>
        <Toggle
          class={styles.problemToggle}
          label="Show better version"
          on={goodVersion()}
          onChange={() => setGoodVersion(!goodVersion())}
        />
        <h3
          class={styles.problemTitle({ mode: goodVersion() ? 'good' : 'bad' })}
        >
          {data().title}
        </h3>
        <ul
          class={styles.bullets}
          style={{ '--bullet-content': `"${bulletType()}"` }}
        >
          <For each={data().bullets}>{bullet => <li>{bullet}</li>}</For>
        </ul>
      </Card>
      {data().content}
    </>
  )
}

const styles = {
  problemCard: css({
    mt: '30px',
    lg: {
      mt: '0',
    },
  }),
  problemToggle: css({
    position: 'absolute',
    top: '-40px',
    right: 'spacing-8',

    lg: {
      top: 'spacing-24',
      right: 'spacing-24',
      left: 'initial',
    },
  }),
  problemTitle: cva({
    base: {
      textStyle: 'tab',
      mb: 'spacing-8',
    },
    variants: {
      mode: {
        bad: {
          color: 'red',
        },
        good: {},
      },
    },
  }),
  bullets: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 'spacing-4',
    '& > li': {
      position: 'relative',
      ml: '30px',
      _before: {
        content: 'var(--bullet-content, "❌")',
        position: 'absolute',
        left: -30,
        top: '50%',
        transform: 'translateY(-45%)',
        fontSize: '0.8em',
      },
    },
  }),
}
