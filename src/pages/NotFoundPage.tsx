import { Component, createSignal, onCleanup } from 'solid-js'
import { RouteSectionProps } from '@solidjs/router'
import { css, cx } from '@style/css'
import { RainbowText } from '@/components/ui/RainbowText'

export const NotFoundPage: Component<RouteSectionProps> = () => {
  let ref = undefined as HTMLDivElement | undefined
  const [distance, setDistance] = createSignal(Infinity)
  const [direction, setDirection] = createSignal(0)

  const handleMouseEvent = (event: MouseEvent) => {
    if (!ref) return
    const cx = ref.offsetLeft + ref.offsetWidth / 2
    const cy = ref.offsetTop + ref.offsetHeight / 2
    const mx = event.clientX + window.scrollX
    const my = event.clientY + window.scrollY

    setDistance(Math.hypot(mx - cx, my - cy))
    setDirection(Math.atan2(my - cy, mx - cx))
  }
  window.addEventListener('mousemove', handleMouseEvent)
  onCleanup(() => window.removeEventListener('mousemove', handleMouseEvent))

  const innerText = (
    <>
      <div class={styles.code}>
        <RainbowText>404!</RainbowText>
      </div>
      <div class={styles.message}>
        <RainbowText>Page not found</RainbowText>
      </div>
    </>
  )

  return (
    <div
      class={styles.container}
      ref={ref}
      style={{ '--distance': distance(), '--direction': direction() }}
    >
      <div class={styles.notFound}>{innerText}</div>
      <div class={cx(styles.notFound, styles.notFoundShadow)}>{innerText}</div>
    </div>
  )
}

const styles = {
  container: css({
    position: 'relative',
    width: '400px',
    mx: 'auto',
    textAlign: 'center',
  }),
  notFound: css({
    position: 'absolute',
    inset: 0,
    '--x': 'calc(cos(var(--direction)) * 2px)',
    '--y': 'calc(sin(var(--direction)) * 5px)',
    '--b': '1px',
    cursor: 'url(/favicon.png) 16 16, pointer',
  }),
  notFoundShadow: css({
    textShadow: `
      calc(var(--x) * 1 + var(--b) * 0) calc(var(--y) * 1 + var(--b) * 0) 0 white,
      calc(var(--x) * 1 + var(--b) * 1) calc(var(--y) * 1 + var(--b) * 1) 0 black,
      calc(var(--x) * 2 + var(--b) * 1) calc(var(--y) * 2 + var(--b) * 1) 0 white,
      calc(var(--x) * 2 + var(--b) * 2) calc(var(--y) * 2 + var(--b) * 2) 0 black,
      calc(var(--x) * 3 + var(--b) * 2) calc(var(--y) * 3 + var(--b) * 2) 0 white,
      calc(var(--x) * 3 + var(--b) * 3) calc(var(--y) * 3 + var(--b) * 3) 0 black
    `,
  }),
  code: css({
    fontWeight: '800',
    fontSize: '80px',
  }),
  message: css({
    fontSize: '42px',
  }),
}
