import { Component, createSignal, onCleanup } from 'solid-js'
import { css, cx } from '@style/css'

export interface SpriteProps {
  ref?: HTMLDivElement | undefined
  frames: string[]
  x: number
  y: number
  xScale?: number
  yScale?: number
  state?: 'play' | 'pause' | undefined
  width?: number
  class?: string
  frameInterval?: number
  onClick?: () => void
}

export const Sprite: Component<SpriteProps> = props => {
  const [loading, setLoading] = createSignal(true)
  const [size, setSize] = createSignal<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })
  const [currentFrame, setCurrentFrame] = createSignal(0)

  // Preload frames
  Promise.all(
    props.frames.map(
      frame =>
        new Promise<HTMLImageElement>(resolve => {
          const img = new Image()
          img.src = frame
          img.onload = () => resolve(img)
        }),
    ),
  ).then(results => {
    setLoading(false)
    setSize({ width: results[0].width, height: results[0].height })
  })

  const enterFrameInterval = setInterval(() => {
    if (props.state === 'play' && props.frames.length) {
      setCurrentFrame(prev => (prev + 1) % props.frames.length)
    }
  }, props.frameInterval ?? 100)

  onCleanup(() => clearInterval(enterFrameInterval))

  return (
    <div
      ref={props.ref}
      class={cx(styles.sprite, props.class)}
      style={{
        display: loading() ? 'none' : 'block',
        'aspect-ratio': `${size().width} / ${size().height}`,
        '--frame-image': `url(${props.frames[currentFrame()]})`,
        top: props.y + 'px',
        left: props.x + 'px',
        transform: `scale(${(props.xScale ?? 1).toString()}, ${(props.yScale ?? 1).toString()})`,
        width: props.width ? props.width + 'px' : size().width + 'px',
        'pointer-events': props.onClick ? 'auto' : 'none',
      }}
      onClick={props.onClick}
      onTouchStart={props.onClick}
    />
  )
}

const styles = {
  sprite: css({
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'var(--frame-image)',
    backgroundSize: '100% 100%',
    pointerEvents: 'none',
  }),
}
