import { ProjectHeader } from '@/components/ProjectHeader'
import { Project, Tab } from '@/models'
import { css } from '@style/css'
import { Component } from 'solid-js'

export const SmartImportCasePage: Component<{ project: Project }> = props => {
  const tabs: Tab[] = [
    { id: 'overview', name: 'Overview' },
    { id: 'plan', name: 'Plan' },
    { id: 'criteria', name: 'Criteria' },
    { id: 'process', name: 'Process' },
    { id: 'fail', name: 'Fail 🫣', class: styles.failTab },
    { id: 'results', name: 'Results' },
    { id: 'learnings', name: 'Learnings' },
  ]

  return (
    <>
      <ProjectHeader tabs={tabs} project={props.project} />
      <main class={styles.main}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique non illo in pariatur, voluptas numquam id minima nam
          doloremque et soluta ut dolor alias sit ratione. Iure, animi itaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique non illo in pariatur, voluptas numquam id minima nam
          doloremque et soluta ut dolor alias sit ratione. Iure, animi itaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique non illo in pariatur, voluptas numquam id minima nam
          doloremque et soluta ut dolor alias sit ratione. Iure, animi itaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique non illo in pariatur, voluptas numquam id minima nam
          doloremque et soluta ut dolor alias sit ratione. Iure, animi itaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique non illo in pariatur, voluptas numquam id minima nam
          doloremque et soluta ut dolor alias sit ratione. Iure, animi itaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique non illo in pariatur, voluptas numquam id minima nam
          doloremque et soluta ut dolor alias sit ratione. Iure, animi itaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique non illo in pariatur, voluptas numquam id minima nam
          doloremque et soluta ut dolor alias sit ratione. Iure, animi itaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique non illo in pariatur, voluptas numquam id minima nam
          doloremque et soluta ut dolor alias sit ratione. Iure, animi itaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique non illo in pariatur, voluptas numquam id minima nam
          doloremque et soluta ut dolor alias sit ratione. Iure, animi itaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique non illo in pariatur, voluptas numquam id minima nam
          doloremque et soluta ut dolor alias sit ratione. Iure, animi itaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique non illo in pariatur, voluptas numquam id minima nam
          doloremque et soluta ut dolor alias sit ratione. Iure, animi itaque!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          similique non illo in pariatur, voluptas numquam id minima nam
          doloremque et soluta ut dolor alias sit ratione. Iure, animi itaque!
        </p>
      </main>
    </>
  )
}

const styles = {
  main: css({
    maxWidth: '1200px',
    mx: 'auto',
    my: '40px',
    px: '20px',
    lineHeight: '1.6',
    fontSize: '18px',
    color: '#333',
  }),
  failTab: css({
    color: 'red',
  }),
}
