import { Component, For } from 'solid-js';
import { css } from '../styled-system/css';
import { type Project } from './models';
import { ProjectCard } from './ProjectCard';


const projects: Project[] = [
  {
    id: 'smart-import',
    name: 'Smart Import',
    company: 'efficy',
    tags: ['Product design', 'UX/UI', 'Enterprise', 'Efficy'],
    thumbnail: '/projects/smart-import.png',
  },
  {
    id: 'monitoring',
    name: 'Monitoring',
    company: 'tis',
    tags: [],
    thumbnail: '/projects/monitoring.png',
  },
  {
    id: 'dashboard',
    name: 'Dashboard',
    company: 'dit',
    tags: [],
    thumbnail: '/projects/dashboard.png',
  },
] 

export const ProjectCards: Component = () => {
  return (
    <div class={styles.projects}>
      <For each={[...projects, ...projects.reverse()]}>
        {project => <ProjectCard project={project} />}
      </For>
    </div>
  );
};

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
