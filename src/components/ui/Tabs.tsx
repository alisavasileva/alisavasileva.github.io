import {
  Component,
  createMemo,
  createSignal,
  For,
  onCleanup,
  onMount,
  Show,
} from 'solid-js'
import { css, cva, cx, RecipeVariantProps } from '@style/css'
import { A } from '@solidjs/router'
import { type Tab } from '@/models'

type HighlightTypes = NonNullable<
  RecipeVariantProps<typeof styles.highlightTab>
>
type VariantTypes = HighlightTypes['variant']

interface TabsProps {
  tabs: Tab[]
  active?: Tab['id']
  onChange?: (active: Tab['id']) => void
  size?: 'small' | 'medium'
  variant?: VariantTypes
  class?: string
}

interface TabProps {
  tab: Tab
  active: boolean
  size: TabsProps['size']
  variant?: VariantTypes
  onClick: () => void
}

interface HighlightTabProps {
  active?: Tab['id']
  tabsElement: HTMLDivElement
  variant?: VariantTypes
}

export const Tabs: Component<TabsProps> = props => {
  let tabsElement!: HTMLDivElement

  return (
    <div class={cx(styles.tabs, props.class)} ref={tabsElement}>
      <For each={props.tabs}>
        {tab => (
          <Tab
            tab={tab}
            active={tab.id === props.active}
            size={props.size ?? 'medium'}
            variant={props.variant}
            onClick={() => props.onChange?.(tab.id)}
          />
        )}
      </For>
      <Show when={tabsElement}>
        <HighlightTab
          active={props.active}
          tabsElement={tabsElement}
          variant={props.variant}
        />
      </Show>
    </div>
  )
}

const Tab: Component<TabProps> = props => {
  const buttonProps = createMemo(() => ({
    'data-tab': props.tab.id,
    class: cx(styles.tab({ size: props.size }), props.tab.class),
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

const HighlightTab: Component<HighlightTabProps> = props => {
  const [triggerCount, setTriggerCount] = createSignal(0)
  const [init, setInit] = createSignal(false)
  const activeTab = () =>
    props.tabsElement.querySelector<HTMLElement>(`[data-tab="${props.active}"]`)
  const highlight = () => {
    const tab = activeTab()
    return tab
      ? {
          height: tab.getBoundingClientRect().height + 'px',
          width: tab.getBoundingClientRect().width + 'px',
          top: tab.offsetTop + 'px',
          left: tab.offsetLeft + 'px',
          display: init() ? 'block' : 'none',
          _: triggerCount(),
        }
      : {
          display: 'none',
        }
  }

  const handleDOMEvent = () => setTriggerCount(triggerCount() + 1)

  window.addEventListener('resize', handleDOMEvent)
  window.addEventListener('scroll', handleDOMEvent)

  onMount(() => setInit(true))
  onCleanup(() => {
    window.removeEventListener('resize', handleDOMEvent)
    window.removeEventListener('scroll', handleDOMEvent)
  })

  return (
    <div
      class={styles.highlightTab({
        init: init(),
        variant: props.variant,
      })}
      style={highlight()}
    />
  )
}

const styles = {
  tabs: css({
    position: 'relative',
    display: 'flex',
    gap: '16px',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }),
  tab: cva({
    base: {
      p: '4px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      border: '2px solid transparent',
    },
    variants: {
      size: {
        small: {
          p: '2px 12px',
        },
        medium: {},
      },
    },
  }),
  highlightTab: cva({
    base: {
      zIndex: -1,
      position: 'absolute',
      transition: 'none',
    },
    variants: {
      init: {
        true: {
          transition: 'all 300ms ease',
        },
      },
      variant: {
        block: {
          borderRadius: '8px',
          background: 'grey.500',
        },
        underline: {
          borderBottom: '2px solid var(--colors-blue)',
        },
      },
    },
    defaultVariants: {
      init: false,
      variant: 'underline',
    },
  }),
}
