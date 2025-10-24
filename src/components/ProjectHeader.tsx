import { Component, createMemo, createSignal, For } from 'solid-js'
import { css } from '@style/css'

import { Tabs } from '@/components/ui/Tabs'
import { Companies, Project, Tab } from '@/models'
import { ProjectNavigation } from './ProjectNavigation'
import { useNavigate } from '@solidjs/router'
import { projects } from '@/data/projects'

interface ProjectHeaderProps {
  tabs: Tab[]
  project: Project
  ref?: HTMLElement
}

export const ProjectHeader: Component<ProjectHeaderProps> = props => {
  const navigate = useNavigate()
  const company = createMemo(() => Companies[props.project.company])
  const companyProduct = createMemo(() =>
    props.project.product
      ? `${company().name} – ${props.project.product}`
      : company().name,
  )
  const [activeTab, setActiveTab] = createSignal<string>(props.tabs[0]?.id)

  const next = createMemo(() => {
    const index = projects.findIndex(p => p.id === props.project.id)
    const next = projects[index + 1] ?? projects[0]
    return { path: `/case/${next.id}`, text: next.name }
  })

  return (
    <>
      <header class={styles.header} ref={props.ref}>
        <ProjectNavigation
          back={() => navigate('/')}
          next={() => navigate(next().path)}
          backText='Cases'
          nextText={next().text}
        />
        <div class={styles.company}>
          <img class={styles.companyIcon} src={company().logo} />
          <span>{companyProduct()}</span>
        </div>
        <div class={styles.tags}>
          <For each={props.project.tags}>
            {tag => <div class={styles.tag}>{tag}</div>}
          </For>
        </div>
        <div class={styles.heading}>
          <div class={styles.projectName}>{props.project.name}</div>
          
        </div>
        <Tabs class={styles.tabs} tabs={props.tabs} active={activeTab()} onChange={setActiveTab} size='small' />
      </header>
    </>
  )
}

const styles = {
  header: css({
    zIndex: 10,
    position: 'sticky',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: '0',
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
  }),
  projectName: css({
    textStyle: 'title',
    alignItems: 'center',
    animation: 'project-header-name',
    animationTimeline: 'scroll(y)',
  }),
  tags: css({
    display: 'flex',
    gap: '8px',
    mt: '8px',
    flexWrap: 'wrap',
    color: 'secondary',
  }),
  tag: css({
    animation: 'project-header-fade',
    animationTimeline: 'scroll(y)',
  }),
  company: css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '20px',
    fontWeight: '400',
    color: 'secondary',
    animation: 'project-header-fade',
    animationTimeline: 'scroll(y)',
  }),
  companyIcon: css({
    height: '21px',
  }),
  tabs: css({
    mt: '10px',
    justifyContent: 'flex-start',
  }),
}
