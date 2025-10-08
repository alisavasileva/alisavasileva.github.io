import { Component, createSignal, For } from 'solid-js';
import { css, cva, cx } from '../styled-system/css';

type Tab = string
const tabs = ['Cases', 'Products', 'Experience', 'Life'] as const satisfies readonly Tab[]

export const Tabs: Component<{ class?: string }> = props => {
  const [activeTab, setActiveTab] = createSignal<typeof tabs[number]>('Cases')
  return (
    <div class={cx(styles.tabs, props.class)}>
      <For each={tabs}>
        {(tab) => <Tab tab={tab} active={tab === activeTab()} onClick={() => setActiveTab(tab)} />}
      </For>
    </div>
  );
}

const Tab: Component<{ tab: Tab, active: boolean, onClick: () => void }> = props => {
  return <div class={styles.tab({ active: props.active })} onClick={props.onClick} tabIndex={0} role="button">
    {props.tab}
  </div>
}

const styles = {
  tabs: css({
    display: 'flex',
    gap: '16px',
    alignContent: 'center',
    justifyContent: 'center',
  }),
  tab: cva({
    base: {
      textStyle: 'tab',
      p: '4px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      border: '2px solid transparent',

      _hover: {
        background: 'linear-gradient(white 0 0) padding-box, conic-gradient(from var(--angle), var(--colors-blue), var(--colors-magenta), var(--colors-blue)) border-box',
        animation: 'rotate 3s linear infinite',
        animationPlayState: 'running',
      },

      // _hover: {
      //   animationPlayState: 'running',
      // },
      // _focusVisible: {
      //   animationPlayState: 'running',
      // },
    },
    variants: {
      active: {
        true: {
          background: 'grey.500',

          _hover: {
            background: 'linear-gradient(var(--colors-grey-500) 0 0) padding-box, conic-gradient(from var(--angle), var(--colors-blue), var(--colors-magenta), var(--colors-blue)) border-box',
          },
        },
      },
    },
  })
}
