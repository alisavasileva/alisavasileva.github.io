import { ProjectHeader } from '@/components/ProjectHeader'
import { Project } from '@/models'
import { Component } from 'solid-js'

export const MonitoringCasePage: Component<{ project: Project }> = props => {
  return <ProjectHeader tabs={[]} project={props.project} />
}
