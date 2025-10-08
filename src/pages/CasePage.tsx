import { ProjectHeader } from '@/components/ProjectHeader'
import { Section } from '@/components/ui/Section'
import { Project } from '@/models'
import { css } from '@style/css'
import { Component } from 'solid-js'
import { Dynamic } from 'solid-js/web'

export const CasePage: Component<{ project: Project }> = props => {
  let headerRef = undefined as HTMLElement | undefined

  return (
    <>
      <ProjectHeader project={props.project} ref={headerRef} />
      <Section class={styles.project} variant="spaced">
        <Dynamic
          component={props.project!.component}
          project={props.project!}
          headerRef={headerRef}
        />
      </Section>
    </>
  )
}

const styles = {
  project: css({
    mt: 'spacing-24',
    mb: 'spacing-32',
  }),
}
