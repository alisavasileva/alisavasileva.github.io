import { Component, Show } from 'solid-js'
import { RouteSectionProps, useMatch, useNavigate } from '@solidjs/router'
import { Modal } from '@/components/ui/Modal'
import { ProjectCards } from '@/components/ProjectCards'

export const CasesPage: Component<RouteSectionProps> = props => {
  const isCaseOpen = useMatch(() => '/case/:id')
  const navigate = useNavigate()

  return (
    <>
      <ProjectCards />
      <Show when={isCaseOpen()}>
        <Modal close={() => navigate('/')}>{props.children}</Modal>
      </Show>
    </>
  )
}
