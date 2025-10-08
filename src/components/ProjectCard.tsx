import { Component, createMemo, For } from 'solid-js'
import { css } from '@style/css'
import { Companies, type Project } from '@/models'
import { A } from '@solidjs/router'

export const ProjectCard: Component<{ project: Project }> = props => {
  const company = createMemo(() => Companies[props.project.company])
  const url = () => props.project.externalLink ?? `/case/${props.project.id}`
  const target = () => (props.project.externalLink ? '_blank' : '_self')

  return (
    <A class={styles.projectCard} href={url()} target={target()}>
      <div class={styles.image}>
        <img src={props.project.thumbnail} />
      </div>
      <div class={styles.header}>
        <img class={styles.companyIcon} src={company().logo} />
        <div class={styles.companyName}>{company().name}</div>
        <div class={styles.projectName}>{props.project.name}</div>
      </div>
      <div class={styles.tags}>
        <For each={props.project.tags}>
          {tag => (
            <>
              <a href="#">#{tag}</a>{' '}
            </>
          )}
        </For>
      </div>
    </A>
  )
}

const styles = {
  projectCard: css({
    textAlign: 'left',
    borderRadius: '12px',
    background: 'transparent',
    outline: '0px solid transparent',
    transition: 'outline 0.4s ease, background 0.4s ease',
    cursor: 'pointer',

    _hover: {
      background: 'grey.500',
      outline: '10px solid var(--colors-grey-500)',
    },
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
    mt: 'spacing-4',
  }),
  tag: css({
    color: 'secondary',
    ml: '8px',
  }),
}
