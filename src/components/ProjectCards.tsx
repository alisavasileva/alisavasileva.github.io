import { Component, For } from 'solid-js'
import { css } from '@style/css'
import { ProjectCard } from '@/components/ProjectCard'
import { filteredProjects } from '@/data/projects'

export const ProjectCards: Component = () => {
  return (
    <div class={styles.projects}>
      <For each={filteredProjects}>
        {project => <ProjectCard project={project} />}
      </For>
    </div>
  )
}

const styles = {
  projects: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px 14px',
    width: '100%',
    maxWidth: '1200px',
    px: '40px',
    mx: 'auto',
  }),
}
