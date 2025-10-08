import { Section } from '@/components/ui/Section'
import { css, cva } from '@style/css'
import { Component } from 'solid-js'

export const ExperiencePage: Component = () => {
  return (
    <Section>
      <h2 class={styles.heading}>7 years of experience</h2>

      <div class={styles.experienceCards}>
        <div class={styles.card({ card: 1 })}>
          <strong>Escape</strong>
          <strong>2018 - 2023</strong>
          <span class={styles.role}>UX / UI Designer</span>
        </div>
        <div class={styles.card({ card: 2 })}>
          <strong>Efficy</strong>
          <strong>2024 - 2025</strong>
          <span class={styles.role}>Product Designer</span>
        </div>
        <div class={styles.card({ card: 3 })}>
          <strong>Sobaka Pavlova</strong>
          <strong>2019</strong>
          <span class={styles.role}>UX Designer</span>
        </div>
      </div>
    </Section>
  )
}

const styles = {
  heading: css({
    textStyle: 'bold',
    mb: 'spacing-24',
  }),
  experienceCards: css({
    '--box-width': '200px',
    '--container-height': '600px',
    '--container-width': '310px',

    position: 'relative',
    width: 'var(--container-width)',
    height: 'var(--container-height)',
    mb: 'spacing-16',
    mx: 'auto',

    lg: {
      '--box-width': '250px',
      '--container-width': 'auto',
      height: 'auto',
      width: '100%',
    },
  }),
  card: cva({
    base: {
      position: 'absolute',
      textAlign: 'left',
      display: 'grid',
      gap: 'spacing-8',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto auto 1fr',
      borderRadius: '12px',
      background: 'blue',
      color: 'white',
      p: 'spacing-8',
      '--spacing': '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',

      lg: {
        gridTemplateColumns: '1fr max-content',
        gridTemplateRows: 'auto auto',
        height: 'auto',
      },
    },
    variants: {
      card: {
        1: {
          background: '#32ADE6',
          height: '350px',
          width: 'var(--box-width)',

          lg: {
            width: 'calc(100% - var(--box-width) - var(--spacing))',
            top: 'initial',
            bottom: 'initial',
            left: 'inherit',
            right: 'inherit',
          },
        },
        2: {
          background: '#00C7BE',
          height: 'calc(200px - var(--spacing))',
          top: 'calc(350px + var(--spacing))',
          width: 'var(--box-width)',

          lg: {
            right: '0',
            top: 'initial',
            bottom: 'initial',
            left: 'inherit',
          },
        },
        3: {
          background: '#007AFF',
          height: '200px',
          right: '0',
          width: 'var(--box-width)',
          top: '120px',

          lg: {
            left: '200px',
            top: '45px',
            bottom: 'initial',
            right: 'initial',
          },
        },
      },
    },
  }),
  role: css({
    gridColumn: '1 / -1',
  }),
}
