import { Component, createSignal, For, onCleanup, onMount } from 'solid-js'
import { RouteSectionProps, useNavigate } from '@solidjs/router'
import { css, cva } from '@style/css'
import { PageNavigation } from '@/components/ui/PageNavigation'
import { Sprite, SpriteProps } from './Sprite'
import { isOverlappingRects, isTouchDevice, playSound } from '@/utils'
import { Icon } from '@/components/ui/Icon'

export const DogPage: Component<RouteSectionProps> = () => {
  const navigate = useNavigate()
  let headerRef = undefined as HTMLElement | undefined
  let musicRef = undefined as HTMLAudioElement | undefined
  let dogRef = undefined as HTMLDivElement | undefined
  let foodRef = undefined as HTMLDivElement | undefined
  let mainRef = undefined as HTMLElement | undefined
  let footerRef = undefined as HTMLElement | undefined

  const [score, setScore] = createSignal(0)
  const [hasCape, setHasCape] = createSignal(false)
  const [volume, _setVolume] = createSignal(0)
  const [poops, setPoops] = createSignal<
    { x: number; y: number; scale: number }[]
  >([])
  const [totalPoops, setTotalPoops] = createSignal(0)
  const [cleanedPoops, setCleanedPoops] = createSignal(0)
  const setVolume = (volume: number) => {
    _setVolume(volume)
    if (musicRef) {
      if (volume > 0) musicRef.play()
      if (volume === 0) musicRef.pause()
      musicRef.volume = volume
    }
  }

  const speed = () => (hasCape() ? 20 : 8)

  const mobileSpeedModifier = 3
  const frames = ['/dog/link1.png', '/dog/link2.png']
  const flyingFrames = ['/dog/link-fly1.png', '/dog/link-fly2.png']
  const poopFrames = ['/dog/poop.png']
  const allFrames = [...frames, ...flyingFrames, ...poopFrames]
  allFrames.map(src => {
    const img = new Image()
    img.src = src
  })

  const linkWidth = 100
  const linkHeight = 71

  const createBounds = () => {
    console.log({
      mainHeight: mainRef?.clientHeight,
      footerHeight: footerRef?.clientHeight,
    })
    return {
      minX: -linkWidth,
      maxX: window.innerWidth,
      minY: 0,
      maxY: (mainRef?.clientHeight ?? window.innerHeight) - (footerRef?.clientHeight ?? 250) - linkHeight,
    }
  }

  const [bounds, setBounds] = createSignal(createBounds())
  const [link, setLink] = createSignal<SpriteProps>({
    frames,
    width: linkWidth,
    state: 'pause',
    x: bounds().maxX / 4,
    y: bounds().maxY / 4,
    xScale: 1,
  })

  const [food, setFood] = createSignal<SpriteProps>({
    frames: ['/dog/food.png'],
    width: 60,
    x: bounds().maxX / 2,
    y: bounds().maxY / 2,
  })

  const [left, setLeft] = createSignal(false)
  const [right, setRight] = createSignal(false)
  const [up, setUp] = createSignal(false)
  const [down, setDown] = createSignal(false)

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp') setUp(true)
    if (event.key === 'ArrowDown') setDown(true)
    if (event.key === 'ArrowLeft') setLeft(true)
    if (event.key === 'ArrowRight') setRight(true)
  }
  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp') setUp(false)
    if (event.key === 'ArrowDown') setDown(false)
    if (event.key === 'ArrowLeft') setLeft(false)
    if (event.key === 'ArrowRight') setRight(false)
  }
  const handleResize = () => {
    setBounds(createBounds())
  }

  onMount(() => {
    setBounds(createBounds())
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('resize', handleResize)
  })
  onCleanup(() => {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('keyup', handleKeyUp)
    window.removeEventListener('resize', handleResize)
    clearInterval(gameInterval)
  })
  let capeTimeout: ReturnType<typeof setTimeout> | undefined = undefined

  const move = (
    dx: number,
    dy: number,
    state: SpriteProps['state'] = 'play',
  ) => {
    setLink({
      ...link(),
      x: link().x + speed() * dx,
      y: link().y + speed() * dy,
      state,
      xScale: dx < 0 ? 1 : dx > 0 ? -1 : link().xScale,
    })
  }

  const gameInterval = setInterval(() => {
    // Move link based on input
    if (left()) move(-1, 0)
    if (right()) move(1, 0)
    if (up()) move(0, -1)
    if (down()) move(0, 1)
    if (!left() && !right() && !up() && !down())
      setLink({ ...link(), state: 'pause' })

    if (!left() && !right() && hasCape()) {
      const direction = link().xScale ?? 1
      if (direction > 0) move(-1, 0)
      if (direction < 0) move(1, 0)
    }

    // Keep link within bounds
    if (link().x < bounds().minX) setLink({ ...link(), x: bounds().maxX })
    if (link().x > bounds().maxX) setLink({ ...link(), x: bounds().minX })
    if (link().y < bounds().minY) setLink({ ...link(), y: bounds().minY })
    if (link().y > bounds().maxY) setLink({ ...link(), y: bounds().maxY })

    // Add trail
    if (hasCape()) {
      if (Math.random() < 0.01) createPoop()
    }

    // Check for collision with food
    const dogRect = dogRef?.getBoundingClientRect()
    const adjustedDogRect = dogRect
      ? new DOMRect(
          dogRect.x,
          dogRect.y + 50,
          dogRect.width,
          dogRect.height - 50,
        )
      : undefined
    if (isOverlappingRects(adjustedDogRect, foodRef?.getBoundingClientRect())) {
      setScore(score() + 1)
      setHasCape(true)
      setLink({ ...link(), frames: flyingFrames })
      clearTimeout(capeTimeout)
      capeTimeout = setTimeout(() => {
        setHasCape(false)
        setLink({ ...link(), frames })
      }, 1000)
      if (volume() > 0) playSound('/dog/bark.mp3', volume())

      let newX = 0
      let newY = 0
      let distance = 0
      do {
        newX = 100 + Math.random() * (bounds().maxX - 200)
        newY = 100 + Math.random() * (bounds().maxY - 300)
        distance = Math.hypot(newX - link().x, newY - link().y)
      } while (distance < 100)

      setFood({ ...food(), x: newX, y: newY })
    }
  }, 25)

  const createPoop = () => {
    setTotalPoops(totalPoops() + 1)
    setPoops(
      [
        ...poops(),
        { x: link().x, y: link().y, scale: Math.random() * 1 + 0.5 },
      ].sort((a, b) => a.y - b.y),
    )
  }

  const info = () =>
    alert(`Music:
Title: The Beat of Nuts n Bolts - 8bit
Artist: Lenny Pixels
Source: https://freemusicarchive.org/
License: CC BY`)

  return (
    <div class={styles.page}>
      <div class={styles.header}>
        <PageNavigation
          back={() => navigate('/life')}
          next={() => navigate('/posters')}
          backText="Life"
          nextText="Posters"
          ref={headerRef}
          width="full"
          title="LINK (my dog)"
        />
      </div>
      <main class={styles.level} ref={mainRef}>
        <For each={poops()}>
          {(poop, n) => (
            <Sprite
              frames={poopFrames}
              width={40 * poop.scale}
              state="pause"
              x={poop.x}
              y={poop.y}
              class={styles.poop}
              onClick={() => {
                setPoops(poops().filter((_, i) => i !== n()))
                setCleanedPoops(cleanedPoops() + 1)
              }}
            />
          )}
        </For>
        <div
          class={styles.shadow}
          style={{
            top: `${link().y + (hasCape() ? 80 : 55)}px`,
            left: `${link().x + 0}px`,
          }}
        />
        <Sprite {...food()} ref={foodRef} />
        <Sprite
          {...link()}
          ref={dogRef}
          class={styles.link({ hasCape: hasCape() })}
        />
      </main>
      <audio ref={musicRef} src="/dog/music.mp3" loop />
      <footer class={styles.footer({ touch: isTouchDevice() })} ref={footerRef}>
        {volume() > 0 && (
          <Icon
            iconName="volume-high"
            size="medium"
            class={styles.volumeIcon}
            onClick={() => setVolume(0)}
          />
        )}
        {volume() <= 0 && (
          <Icon
            iconName="volume-xmark"
            size="medium"
            class={styles.volumeIcon}
            onClick={() => setVolume(1)}
          />
        )}
        <Icon
          iconName="info-circle"
          size="medium"
          class={styles.infoIcon}
          onClick={() => info()}
        />
        {!isTouchDevice() ? (
          <>
            <img src="/dog/arrows.png" />
            <div>
              Link is my dog. He is very good dog.
              <br />
              Use the arrow keys to help him get food
              <br />
            </div>
          </>
        ) : (
          <>
            <div class={styles.mobileButtons}>
              <img
                src="/dog/up.png"
                onClick={() => move(0, -mobileSpeedModifier)}
              />
            </div>
            <div class={styles.mobileButtons}>
              <img
                src="/dog/left.png"
                onClick={() => move(-mobileSpeedModifier, 0)}
              />
              <img
                src="/dog/down.png"
                onClick={() => move(0, mobileSpeedModifier)}
              />
              <img
                src="/dog/right.png"
                onClick={() => move(mobileSpeedModifier, 0)}
              />
            </div>
            <div>
              Link is my dog. He is very good dog.
              <br />
              Use the arrows to help him get food
            </div>
          </>
        )}
        <div class={styles.score}>
          <div>HAPPINESS: {score()}</div>
          {totalPoops() > 0 && <div>POOPS: {totalPoops()}</div>}
          {cleanedPoops() > 0 && <div>CLEANED: {cleanedPoops()}</div>}
        </div>
      </footer>
    </div>
  )
}

const styles = {
  page: css({
    display: 'flex',
    flexDirection: 'column',
    height: '100dvh',
    widows: '100dw',
  }),
  level: css({
    background: 'url(/dog/grass.png) repeat',
    backgroundSize: '200px',
    borderTop: '1px solid black',
    position: 'relative',
    flex: 1,
    overflow: 'hidden',
    touchAction: 'manipulation',
  }),
  header: css({
    background: 'mist',
    top: 0,
    left: 0,
    right: 0,
    py: 'spacing-8',
    backdropFilter: 'blur(5px)',
  }),
  footer: cva({
    base: {
      position: 'fixed',
      display: 'flex',
      gap: 'spacing-32',
      bottom: 0,
      left: 0,
      right: 0,
      fontFamily: '"Jersey 10", sans-serif',
      p: 'spacing-32',
      textAlign: 'center',
      borderTop: '1px solid black',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
      touchAction: 'manipulation',

      '& img': {
        height: '64px',
      },
    },
    variants: {
      touch: {
        true: {
          flexDirection: 'column',
          gap: 'spacing-4',
          p: 'spacing-16',
        },
      },
    },
  }),
  infoIcon: css({
    position: 'absolute',
    right: 'spacing-16',
    top: 'spacing-16',
    cursor: 'pointer',
  }),
  volumeIcon: css({
    position: 'absolute',
    left: 'spacing-16',
    top: 'spacing-16',
    cursor: 'pointer',
  }),
  score: css({
    fontSize: '28px',
    lineHeight: '18px',
    display: 'flex',
    gap: 'spacing-8',
    flexWrap: 'nowrap',

    sm: {
      display: 'block',
    }
  }),
  mobileButtons: css({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'spacing-4',

    '& > img': {
      height: '50px',
    },
  }),
  link: cva({
    base: {
      transition: 'translate 0.1s ease',
    },
    variants: {
      hasCape: {
        true: {
          translate: '0 -15px',
        },
      },
    },
  }),
  shadow: css({
    position: 'absolute',
    width: '100px',
    height: '30px',
    background: '#00000033',
    borderRadius: '50%',
    filter: 'blur(4px)',
  }),
  poop: css({
    pointerEvents: 'unset',
    cursor: 'url(/dog/poop-bag.png) 50 50, grab',
  }),
}
