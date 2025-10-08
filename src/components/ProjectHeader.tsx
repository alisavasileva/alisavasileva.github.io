import { Component, createMemo, createSignal } from 'solid-js'
import { css } from '@style/css'
import { Card } from '@/components/ui/Card'
import { Tabs } from '@/components/ui/Tabs'
import { Companies, Project, Tab } from '@/models'

interface ProjectHeaderProps {
  tabs: Tab[]
  project: Project
}

export const ProjectHeader: Component<ProjectHeaderProps> = props => {
  const company = createMemo(() => Companies[props.project.company])
  const companyProduct = createMemo(() =>
    props.project.product
      ? `${company().name} – ${props.project.product}`
      : company().name,
  )
  const [activeTab, setActiveTab] = createSignal<string>(props.tabs[0]?.id)

  return (
    <Card class={styles.header} theme='mist'>
      <div class={styles.heading}>
        <div class={styles.projectName}>{props.project.name}</div>
        <div class={styles.company}>
          <img class={styles.companyIcon} src={company().logo} />
          <span>{companyProduct()}</span>
        </div>
      </div>
      <Tabs class={styles.tabs} tabs={props.tabs} active={activeTab()} onChange={setActiveTab} size='small' />
    </Card>
  )
}

const styles = {
  header: css({
    position: 'sticky',
    top: '0',
    p: '10px',
  }),
  heading: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  projectName: css({
    textStyle: 'title',
    alignItems: 'center',
  }),
  company: css({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '20px',
    fontWeight: '400',
    color: 'secondary',
  }),
  companyIcon: css({
    height: '21px',
  }),
  tabs: css({
    mt: '10px',
    justifyContent: 'flex-start',
  }),
}
