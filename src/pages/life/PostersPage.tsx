import { Component, createMemo, createSignal, For, onCleanup } from 'solid-js'
import { RouteSectionProps, useNavigate } from '@solidjs/router'
import { css, cva } from '@style/css'
import { Posters } from '@/data/posters'
import { ScrollTarget } from '@/components/ui/ScrollTarget'
import { activeTarget } from '@/utils'
import { PageNavigation } from '@/components/ui/PageNavigation'

export const PostersPage: Component<RouteSectionProps> = () => {
  let headerRef: HTMLElement | undefined = undefined as HTMLElement | undefined
  const navigate = useNavigate()
  const [scrollY, setScrollY] = createSignal<number>(window.scrollY)
  const activeTab = createMemo(() =>
    activeTarget(
      Posters.map(group => group.name),
      undefined,
      scrollY,
      50,
    ),
  )
  const onScroll = () => setScrollY(Math.round(window.scrollY))
  window.addEventListener('scroll', onScroll)

  onCleanup(() => {
    window.removeEventListener('scroll', onScroll)
  })

  const handleTabChange = (tab: string) => {
    const targetElement = document.getElementById(tab)
    if (targetElement == null) return
    window.scrollTo({
      top:
        targetElement.offsetTop +
        (headerRef ? headerRef.getBoundingClientRect().height : 0) * -1,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div class={styles.header}>
        <PageNavigation
          back={() => navigate('/life')}
          next={() => navigate('/photography')}
          backText="Life"
          nextText="Photography"
          ref={headerRef}
          width="full"
          title="POSTERS"
        />
      </div>
      <div class={styles.posters}>
        <div class={styles.tabs}>
          <For each={Posters}>
            {posterGroup => (
              <div
                class={styles.tab({ active: activeTab() === posterGroup.name })}
                style={{ background: posterGroup.color }}
                onClick={() => handleTabChange(posterGroup.name)}
              >
                <div />
              </div>
            )}
          </For>
        </div>
        <div class={styles.grid}>
          <For each={Posters}>
            {posterGroup => (
              <>
                <For each={posterGroup.posters}>
                  {(poster, i) => (
                    <div>
                      {i() === 0 && (
                        <ScrollTarget
                          id={posterGroup.name}
                          headerRef={undefined}
                        />
                      )}
                      <img src={`/posters/${poster}`} />
                    </div>
                  )}
                </For>
              </>
            )}
          </For>
        </div>
      </div>
    </>
  )
}

const styles = {
  header: css({
    position: 'sticky',
    zIndex: 10,
    background: 'mist',
    top: 0,
    left: 0,
    right: 0,
    py: 'spacing-8',
    backdropFilter: 'blur(5px)',
  }),
  posters: css({
    pl: 'calc(50px + var(--spacing-spacing-16) * 2)',
  }),
  tabs: css({
    left: 0,
    top: '40px',
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    gap: 'spacing-8',
    width: 'max-content',
    p: 'spacing-16',
  }),
  grid: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    flexGrow: 1,
    gap: 'spacing-8',

    sm: { gridTemplateColumns: 'repeat(2, 1fr)' },
    md: { gridTemplateColumns: 'repeat(3, 1fr)' },
    lg: { gridTemplateColumns: 'repeat(4, 1fr)' },
  }),
  tab: cva({
    base: {
      position: 'relative',
      width: '50px',
      height: '50px',
      borderRadius: '25px',
      boxShadow: '0 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D',
      cursor: 'pointer',

      '& > div': {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '0',
        aspectRatio: '1',
        background: 'white',
        borderRadius: '50%',
        transition: 'all 0.2s ease-in-out',
      },

      _hover: {
        '& > div': {
          width: '5px',
        },
      },
    },
    variants: {
      active: {
        true: {
          '& > div': {
            width: '20px',
          },
          _hover: {
            '& > div': {
              width: '20px',
            },
          },
        },
      },
    },
  }),
}
