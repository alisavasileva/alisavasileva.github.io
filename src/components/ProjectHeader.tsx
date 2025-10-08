import {
  Component,
  createMemo,
  createSignal,
  For,
  onCleanup,
  onMount,
} from 'solid-js'
import { css } from '@style/css'

import { Tabs } from '@/components/ui/Tabs'
import { Companies, Project, Tab } from '@/models'
import { PageNavigation } from './ui/PageNavigation'
import { useNavigate } from '@solidjs/router'
import { fullyFilteredProjects } from '@/data/projects'
import { activeTarget } from '@/utils'

interface ProjectHeaderProps {
  project: Project
  ref?: HTMLElement
}

export const ProjectHeader: Component<ProjectHeaderProps> = props => {
  let headerRef!: HTMLElement
  const navigate = useNavigate()
  const company = createMemo(() => Companies[props.project.company])
  const companyProduct = createMemo(() =>
    props.project.product
      ? `${company().name} – ${props.project.product}`
      : company().name,
  )
  const [scrollY, setScrollY] = createSignal<number>(window.scrollY)
  const [overrideActiveTab, setOverrideActiveTab] = createSignal<string | null>(
    null,
  )
  const activeTab = createMemo(() =>
    activeTarget(
      props.project.tabs.map(tab => tab.id),
      headerRef,
      scrollY,
    ),
  )

  const [headerHeight, setHeaderHeight] = createSignal(0)
  const resize = new ResizeObserver(entry => {
    setHeaderHeight(entry[0]?.contentRect.bottom ?? 0)
  })
  onMount(() => resize.observe(headerRef))

  const windowEvents = {
    scroll: () => setScrollY(Math.round(window.scrollY)),
    wheel: () => setOverrideActiveTab(null),
    touchmove: () => setOverrideActiveTab(null),
    keydown: (event: KeyboardEvent) => {
      if (
        [
          'ArrowUp',
          'ArrowDown',
          'PageUp',
          'PageDown',
          'Home',
          'End',
          ' ',
        ].includes(event.key)
      ) {
        setOverrideActiveTab(null)
      }
    },
  } as const
  Object.entries(windowEvents).forEach(([event, handler]) =>
    window.addEventListener(event, handler as EventListener),
  )
  onCleanup(() => {
    Object.entries(windowEvents).forEach(([event, handler]) =>
      window.removeEventListener(event, handler as EventListener),
    )
    resize.disconnect()
  })

  const next = createMemo(() => {
    const index = fullyFilteredProjects.findIndex(
      p => p.id === props.project.id,
    )
    const next = fullyFilteredProjects[index + 1] ?? fullyFilteredProjects[0]
    return { path: `/case/${next.id}`, text: next.name }
  })

  const handleTabChange = (tab: string) => {
    const targetElement = document.getElementById(tab)
    setOverrideActiveTab(tab)
    if (targetElement == null) return
    window.scrollTo({
      top:
        targetElement.offsetTop +
        (headerRef?.getBoundingClientRect().height ?? 0) * -1,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <header class={styles.header} ref={headerRef}>
        <PageNavigation
          back={() => navigate('/')}
          next={() => navigate(next().path)}
          backText="Cases"
          nextText={next().text}
        />
        <div class={styles.company}>
          <img class={styles.companyIcon} src={company().logo} />
          {props.project.link ? (
            <a href={props.project.link} target="_blank" class="link">
              {companyProduct()}
            </a>
          ) : (
            <span>{companyProduct()}</span>
          )}
        </div>
        <div class={styles.heading}>
          <div class={styles.projectName}>{props.project.name}</div>
        </div>
        <div class={styles.tags}>
          <For each={props.project.tags}>{tag => <div># {tag}</div>}</For>
        </div>
        {props.project.tabs.length > 0 && (
          <Tabs
            class={styles.tabs}
            tabs={props.project.tabs}
            active={overrideActiveTab() ?? activeTab()}
            onChange={handleTabChange}
            size="small"
          />
        )}
      </header>
      <div style={{ height: headerHeight() + 'px' }} /> {/* Spacer */}
    </>
  )
}

const animationTimeline = {
  animationTimeline: 'scroll(y)',
  animationRange: '0px 300px',
  animationFillMode: 'both',
} as const

const animationHeaderFade = {
  animationName: 'project-header-fade-no-interpolate-size',
  '@supports (interpolate-size: allow-keywords)': {
    animationName: 'project-header-fade',
  },
} as const

const styles = {
  header: css({
    zIndex: 10,
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: '0',
    width: '100%',
    p: '10px',
    background: 'mist',
    backdropFilter: 'blur(5px)',
    borderBottom: '1px solid',
    borderColor: '#E4E6EE',
  }),
  heading: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 'spacing-24',
  }),
  projectName: css({
    textStyle: 'title',
    alignItems: 'center',
    animationName: 'project-header-name',
    textAlign: 'center',
    ...animationTimeline,
  }),
  tags: css({
    display: 'flex',
    gap: '8px',
    mt: '8px',
    flexWrap: 'wrap',
    color: 'secondary',
    fontSize: '18px',
    justifyContent: 'center',
    ...animationTimeline,
    ...animationHeaderFade,
  }),
  company: css({
    display: 'flex',
    alignItems: 'center',
    gap: 'spacing-8',
    fontSize: '20px',
    fontWeight: '400',
    color: 'secondary',
    ...animationTimeline,
    ...animationHeaderFade,
  }),
  companyIcon: css({
    height: '21px',
  }),
  tabs: css({
    mt: 'spacing-32',
    animationName: 'project-header-mt',
    ...animationTimeline,
  }),
}
