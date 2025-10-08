import { Component, createSignal, onCleanup } from 'solid-js'

interface ScrollTargetProps {
  id: string
  headerRef: HTMLElement | undefined
}

export const ScrollTarget: Component<ScrollTargetProps> = props => {
  const [scrollMarginTop, setScrollMarginTop] = createSignal('0px')
  const resize = new ResizeObserver(entry => {
    const offset = entry[0]?.contentRect.bottom ?? 0
    setScrollMarginTop(`calc(${offset}px + var(--spacing-spacing-16))`)
  })
  if (props.headerRef) {
    resize.observe(props.headerRef)
  }
  onCleanup(() => resize.disconnect())

  return <a id={props.id} style={{ 'scroll-margin-top': scrollMarginTop() }} />
}
