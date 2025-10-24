import { Component } from 'solid-js'
import { RouteSectionProps } from '@solidjs/router'

export const RootLayout: Component<RouteSectionProps> = props => {
  return props.children
}
