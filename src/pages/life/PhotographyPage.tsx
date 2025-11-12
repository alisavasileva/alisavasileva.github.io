import {
  Component,
  createEffect,
  createSignal,
  For,
  onCleanup,
  onMount,
} from 'solid-js'
import { RouteSectionProps, useNavigate } from '@solidjs/router'
import { css, cva } from '@style/css'
import { PageNavigation } from '@/components/ui/PageNavigation'
import { Photos } from '@/data/photography'
import { Icon } from '@/components/ui/Icon'
import { isTouchDevice } from '@/utils'

interface Position {
  x: number
  y: number
}

interface ThumbnailProps {
  photo: string
  mousePosition: Position
  active: boolean
  onClick: () => void
}

export const PhotographyPage: Component<RouteSectionProps> = () => {
  let headerRef = undefined as HTMLElement | undefined
  let navListRef: HTMLUListElement | undefined = undefined as
    | HTMLUListElement
    | undefined
  const navigate = useNavigate()
  const [mousePosition, setMousePosition] = createSignal<Position>({
    x: 0,
    y: 0,
  })
  const [photo, setPhoto] = createSignal<string>(Photos[0])
  const [loading, setLoading] = createSignal<boolean>(false)

  const nextPhoto = () => {
    const currentIndex = Photos.indexOf(photo())
    const nextIndex = (currentIndex + 1) % Photos.length
    setPhoto(Photos[nextIndex])
    window.location.hash = `${nextIndex + 1}`
  }

  const previousPhoto = () => {
    const currentIndex = Photos.indexOf(photo())
    const prevIndex = (currentIndex - 1 + Photos.length) % Photos.length
    setPhoto(Photos[prevIndex])
    window.location.hash = `${prevIndex + 1}`
  }

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') nextPhoto()
    if (event.key === 'ArrowLeft') previousPhoto()
  }
  onMount(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('keydown', handleKeydown)

    if (window.location.hash.substring(1)) {
      const index = parseInt(window.location.hash.substring(1)) - 1
      if (index >= 0 && index < Photos.length) {
        setPhoto(Photos[index])
      }
    }
  })
  onCleanup(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('keydown', handleKeydown)
  })

  createEffect(() => {
    setLoading(true)
    const img = new Image()
    img.src = `/photography/full/${photo()}`
    img.onload = () => {
      setLoading(false)
    }
  })

  createEffect(() => {
    if (!navListRef || isTouchDevice()) return
    const margin = 56
    const percent = (mousePosition().x - margin) / (window.innerWidth - margin)
    const max = navListRef.scrollWidth - (window.innerWidth - margin)
    const offset = Math.max(
      Math.min(navListRef.scrollWidth - window.innerWidth, percent * max),
      0,
    )
    navListRef.style.setProperty('--scroll-left', `${offset}px`)
  })

  createEffect(() => {
    const activeElement = navListRef?.querySelector<HTMLElement>(
      `[data-photo="${photo()}"]`,
    )
    if (!activeElement || !navListRef || !isTouchDevice()) return

    const center = window.innerWidth / 2
    const offset =
      activeElement.offsetLeft -
      center +
      activeElement.getBoundingClientRect().width / 2
    const clampedOffset = Math.max(
      0,
      Math.min(offset, navListRef.scrollWidth - window.innerWidth),
    )
    navListRef.style.setProperty('--scroll-left', `${clampedOffset}px`)
  })

  return (
    <div class={styles.page}>
      <div class={styles.header}>
        <PageNavigation
          back={() => navigate('/life')}
          next={() => navigate('/dog')}
          backText="Back"
          nextText="Dog"
          ref={headerRef}
          width="full"
          title="PHOTOGRAPHY"
        />
      </div>
      <main
        class={styles.main}
        style={{
          '--photo': `url(/photography/full/${photo()}`,
          '--thumbnail': `url(/photography/thumbnail/${photo()}`,
        }}
      >
        <div
          class={styles.foreground({ loading: loading() })}
          onClick={() => nextPhoto()}
        >
          {loading() && (
            <Icon class={styles.loading} iconName="rotate" size="large" />
          )}
        </div>
        <div class={styles.background} />
        <nav class={styles.nav}>
          <ul class={styles.navList} ref={navListRef}>
            <For each={Photos}>
              {(p, n) => (
                <Thumbnail
                  photo={p}
                  mousePosition={mousePosition()}
                  active={photo() === p}
                  onClick={() => {
                    setPhoto(p)
                    window.location.hash = `${n() + 1}`
                  }}
                />
              )}
            </For>
          </ul>
        </nav>
      </main>
    </div>
  )
}

export const Thumbnail: Component<ThumbnailProps> = props => {
  let ref = undefined as HTMLLIElement | undefined

  const scale = () => {
    if (isTouchDevice()) return 1
    const mouseX = props.mousePosition.x
    const mouseY = props.mousePosition.y
    if (!ref || mouseX === 0 || mouseY === 0) return 1

    const { x, y } = ref.getBoundingClientRect()
    const position: Position = {
      x: x + 56,
      y: y + 56,
    }
    const maxScale = 2
    const distance = Math.hypot(position.x - mouseX, position.y - mouseY)
    const maxDistance = 150
    const minDistance = 50
    const clampedDistance = Math.max(
      0,
      Math.min(distance, maxDistance) - minDistance,
    )
    const range = maxDistance - minDistance

    return 1 + ((range - clampedDistance) / range) * (maxScale - 1)
  }

  return (
    <>
      <li
        class={styles.navItem}
        ref={ref}
        style={{
          '--scale': scale(),
          '--photo': `url(/photography/thumbnail/${props.photo}`,
        }}
        onClick={props.onClick}
        data-photo={props.photo}
      >
        <div class={styles.navImage} />
        {props.active && <div class={styles.navActive} />}
      </li>
    </>
  )
}

const styles = {
  page: css({
    height: '100dvh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  }),
  header: css({
    background: 'mist',
    top: 0,
    left: 0,
    right: 0,
    py: 'spacing-8',
    backdropFilter: 'blur(5px)',
  }),
  nav: css({
    position: 'absolute',
    zIndex: 3,
    top: 'calc(-1 * var(--border-width))',
    '--border-width': '4px',
    '--base-photo-height': '56px',
    height: 'calc(var(--base-photo-height) + var(--border-width) * 2)',
    background: 'white',
    minWidth: '100vw',
  }),
  navList: css({
    whiteSpace: 'nowrap',
    width: '100%',
    overflowX: 'hidden',
    pr: 'var(--border-width)',
    pb: 'var(--border-width)',
  }),
  navItem: css({
    position: 'relative',
    display: 'inline-block',
    verticalAlign: 'top',
    borderRadius: '11px',
    border: 'var(--border-width) solid white',
    overflow: 'hidden',
    mr: 'calc(-1 * var(--border-width))',
    mb: 'calc(-1 * var(--border-width))',
    translate: 'calc(-1 * var(--scroll-left)) 0',
  }),
  navImage: css({
    height: 'calc(56px * var(--scale, 1))',
    aspectRatio: '1',
    flexGrow: 0,
    flexShrink: 0,
    cursor: 'pointer',
    backgroundColor: 'grey.500',
    backgroundImage: 'var(--photo)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),
  navActive: css({
    '--size': '8px',
    position: 'absolute',
    bottom: '4px',
    left: 'calc(50% - var(--size) / 2)',
    width: 'var(--size)',
    height: 'var(--size)',
    borderRadius: '50%',
    backgroundColor: 'white',
    pointerEvents: 'none',
  }),
  main: css({
    position: 'relative',
    zIndex: 0,
    width: '100vw',
    flexGrow: 1,
  }),
  foreground: cva({
    base: {
      position: 'absolute',
      zIndex: 1,
      inset: 0,
      top: 60,
      backgroundImage: 'var(--photo)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backdropFilter: 'blur(8px) brightness(0.4)',
    },
    variants: {
      loading: {
        true: {
          backgroundImage: 'none',
        },
      },
    },
  }),
  background: css({
    position: 'absolute',
    zIndex: 0,
    inset: 0,
    top: 60,
    backgroundImage: 'var(--thumbnail)',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }),
  loading: css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    transformOrigin: '0 0',
    animation: 'rotate 1s linear infinite',
  }),
}
