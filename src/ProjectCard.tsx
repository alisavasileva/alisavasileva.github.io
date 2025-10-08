import { Component, createMemo, For } from 'solid-js';
import { css } from '../styled-system/css';
import { Companies, type Project } from './models';

export const ProjectCard: Component<{ project: Project }> = props => {
  const company = createMemo(() => Companies[props.project.company])
  return (
    <div class={styles.projectCard}>
      <div class={styles.image}>
        <img src={props.project.thumbnail} />
      </div>
      <div class={styles.header}>
        <img class={styles.companyIcon} src={company().logo} />
        <div class={styles.companyName}>{company().name}</div>
        <div class={styles.projectName}>{props.project.name}</div>
      </div>
      <div class={styles.tags}>
        <For each={props.project.tags}>{tag => <><a href='#'>#{tag}</a>{' '}</>}</For>
      </div>
    </div>
  );
};

const styles = {
  projectCard: css({
    textAlign: 'left',
  }),
  image: css({
    borderRadius: '12px',
    width: '100%',
    aspectRatio: '4 / 3',
    background: '#DAFDF9',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '12px',
    },
  }),
  header: css({
    display: 'flex',
    alignItems: 'center',
    mt: '4px',
  }),
  companyIcon: css({
    height: '21px',
    width: '15px',
    mx: '8px',
  }),
  companyName: css({
    textStyle: 'main',
    color: 'secondary',
    mr: '20px',
  }),
  projectName: css({
    textStyle: 'cardTitle',
  }),
  tags: css({
    color: 'secondary',
    mt: '8px',
  }),
  tag: css({
    color: 'secondary',
    ml: '8px',
  }),
}