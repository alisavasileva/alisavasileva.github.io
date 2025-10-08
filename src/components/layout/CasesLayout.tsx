import { Component, createMemo } from 'solid-js'
import { RouteSectionProps } from '@solidjs/router'
import { projects } from '@/data/projects'
import { Rerun } from '@solid-primitives/keyed'
import { CasePage } from '@/pages/CasePage'

export const CasesLayout: Component<RouteSectionProps> = props => {
  console.log('as')
  const project = createMemo(() => projects.find(p => p.id === props.params.id))

  if (!project() || project()!.show === false) {
    window.location.href = '/404'
    return ''
  }

  return (
    <Rerun on={() => project()?.id}>
      <CasePage project={project()!} />
    </Rerun>
  )
}
