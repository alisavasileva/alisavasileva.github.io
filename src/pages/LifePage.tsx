import { Section } from '@/components/ui/Section'
import { AlisaThumbnailBase64 } from '@/data/base64images'
import { A, useNavigate } from '@solidjs/router'
import { css, cx } from '@style/css'
import { Component, createSignal, onCleanup, onMount } from 'solid-js'

export const LifePage: Component = () => {
  const navigate = useNavigate()
  let sectionRef = undefined as HTMLElement | undefined
  const text =
    'I’m a designer, traveller, and photographer who finds joy in simple things — music, books, and long walks with my dog. I’m endlessly curious about how people build products and businesses, and I love turning that curiosity into design. Over the past couple of years, I’ve been mentoring designers and coming up with side projects together — it’s become a fun part of my life.'

  const [offset, setOffset] = createSignal(0)

  const updateOffset = () => {
    if (sectionRef) {
      const width = parseInt(
        getComputedStyle(sectionRef).getPropertyValue('--image-width'),
      )
      setOffset((sectionRef.clientWidth - width) / 2)
    }
  }

  window.addEventListener('resize', updateOffset)
  onMount(() => updateOffset())
  onCleanup(() => window.removeEventListener('resize', updateOffset))

  return (
    <Section
      class={styles.life}
      ref={sectionRef}
      style={{ '--offset': offset() + 'px' }}
    >
      <div class={cx(styles.posters, styles.link)}>
        <A class={styles.linkText} href="/posters">
          POSTERS
        </A>
      </div>
      <div class={cx(styles.photography, styles.link)}>
        <A class={styles.linkText} href="/photography">
          PHOTOGRAPHY
        </A>
      </div>
      <div class={styles.paragraph}>
        <div class={styles.paragraphInner}>{text}</div>
      </div>
      <div class={styles.paragraphBg} aria-hidden="true">
        {text}
      </div>
      <img
        class={styles.dog}
        src="/dog/link1.png"
        alt="Click my dog!"
        onClick={() => navigate('/dog')}
      />
      <img
        class={styles.picture}
        src="/alisa.jpg"
        alt="Me sitting on some steps"
        style={{
          'background-image': `url(data:image/jpg;base64,${AlisaThumbnailBase64})`
        }}
      />
    </Section>
  )
}

const styles = {
  life: css({
    '--image-width': '200px',
    '--image-height': 'calc(var(--image-width) * 487 / 332)',
    '--text-start': '15%',
    '--mt': '96px',

    position: 'relative',
    height: 'var(--image-height)',
    mt: 'var(--mt)',

    md: {
      '--mt': '0',
      '--image-width': '332px',
      '--text-start': '50%',
    },
  }),
  link: css({
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: 'spacing-8',
    zIndex: '0',

    top: 'calc(-1 * var(--mt) + var(--spacing-spacing-16))',
    width: '50%',
    height: 'auto',

    md: {
      zIndex: '2',
      top: '0',
      width: 'var(--offset)',
      height: 'var(--text-start)',
    },
  }),
  linkText: css({
    py: 'spacing-8',
    px: 'spacing-16',
    background: 'mist',
    borderRadius: '8px',

    _hover: {
      background: 'grey.500',
    },
  }),
  posters: css({
    left: '0',
  }),
  photography: css({
    right: '0',
  }),
  paragraphBg: css({
    position: 'absolute',
    top: 'var(--text-start)',
    left: '0',
    right: '0',
    zIndex: '0',
    fontWeight: '500',
  }),
  paragraph: css({
    position: 'absolute',
    left: 'calc(50% - var(--image-width) / 2)',
    top: '0',
    height: 'var(--image-height)',
    zIndex: '2',
    width: 'var(--image-width)',
    overflow: 'hidden',
  }),
  paragraphInner: css({
    position: 'absolute',
    top: 'var(--text-start)',
    fontWeight: '500',
    width: 'calc(100% + var(--offset) * 2)',
    mx: 'calc(-1 * var(--offset))',
    color: '#EFFF92',
  }),
  picture: css({
    position: 'absolute',
    zIndex: '1',
    top: '0',
    left: 'calc(50% - var(--image-width) / 2)',
    height: 'var(--image-height)',
    width: 'var(--image-width)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }),
  dog: css({
    height: '100px',
    position: 'absolute',
    left: '50%',
    top: '10px',
    cursor: 'pointer',
    animation: 'dog-hide 20s linear infinite',
  }),
}
