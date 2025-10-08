import { Component } from 'solid-js'
import { RouteSectionProps } from '@solidjs/router'
import { css } from '@style/css'
import { Image } from '@/components/ui/Image'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export const CVPage: Component<RouteSectionProps> = () => {
  return (
    <Section>
      <Button tag="a" href="/cv.pdf" download="Alisa_Vasileva_CV.pdf">
        Download
      </Button>
      <a
        href="/cv.pdf"
        download="Alisa_Vasileva_CV.pdf"
        class={styles.imageLink}
      >
        <Image src="/cv.png" alt="CV Preview" class={styles.image} />
      </a>
    </Section>
  )
}

const styles = {
  imageLink: css({
    display: 'block',
    mx: 'auto',
    width: '300px',
    borderRadius: '8px',
  }),
  image: css({
    width: '100%',
    mt: 'spacing-24',
  }),
}
