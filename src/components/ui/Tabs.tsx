import { Component, createMemo, For } from 'solid-js'
import { css, cva, cx } from '@style/css'
import { A } from '@solidjs/router'
import { type Tab } from '@/models'

interface TabsProps {
  tabs: Tab[]
  active?: Tab['id']
  onChange?: (active: Tab['id']) => void
  size?: 'small' | 'medium'
  class?: string
}

interface TabProps {
  tab: Tab
  active: boolean
  size: TabsProps['size']
  onClick: () => void
}

export const Tabs: Component<TabsProps> = props => {
  return (
    <div class={cx(styles.tabs, props.class)}>
      <For each={props.tabs}>
        {tab => (
          <Tab
            tab={tab}
            active={tab.id === props.active}
            size={props.size ?? 'medium'}
            onClick={() => props.onChange?.(tab.id)}
          />
        )}
      </For>
    </div>
  )
}

const Tab: Component<TabProps> = props => {
  const buttonProps = createMemo(() => ({
    class: cx(styles.tab({ active: props.active, size: props.size }), props.tab.class),
    onClick: props.onClick,
    tabIndex: 0,
    role: 'button' as const,
    children: props.tab.name,
  }))

  return props.tab.path ? (
    <A href={props.tab.path} {...buttonProps()} />
  ) : (
    <div {...buttonProps()} />
  )
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
        background:
          'linear-gradient(white 0 0) padding-box, conic-gradient(from var(--angle), var(--colors-blue), var(--colors-magenta), var(--colors-blue)) border-box',
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
            background:
              'linear-gradient(var(--colors-grey-500) 0 0) padding-box, conic-gradient(from var(--angle), var(--colors-blue), var(--colors-magenta), var(--colors-blue)) border-box',
          },
        },
      },
      size: {
        small: {
          p: '2px 12px',
        },
        medium: {},
      }
    },
  }),
}
