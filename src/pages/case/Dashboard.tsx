import { ProjectHeader } from '@/components/ProjectHeader'
import { Project } from '@/models'
import { Component } from 'solid-js'

export const DashboardCasePage: Component<{ project: Project }> = props => {
  return <ProjectHeader tabs={[]} project={props.project} />
}
