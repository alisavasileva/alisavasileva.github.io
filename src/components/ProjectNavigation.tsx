import { Component } from 'solid-js'
import { Section } from './ui/Section'
import { Icon } from './ui/Icon'
import { css, cx } from '@style/css'

interface ProjectNavigationProps {
  back: () => void
  next: () => void
  backText: string
  nextText: string
  class?: string
}

export const ProjectNavigation: Component<ProjectNavigationProps> = props => {
  return <Section class={cx(styles.navigation, props.class)}>
    <div class={styles.navigationButton} onClick={props.back}>
      <Icon iconName='arrow-left' size='small' prefix='fas' />
      <span>{props.backText}</span>
    </div>
    <div class={styles.navigationButton} onClick={props.next}>
      <span>Next: {props.nextText}</span>
      <Icon iconName='arrow-right' size='small' prefix='fas' />
    </div>
  </Section>
}

const styles = {
  navigation: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  navigationButton: css({
    display: 'flex',
    alignItems: 'center',
    gap: 'spacing-24',
    px: 'spacing-8',
    py: 'spacing-4',
    borderRadius: '8px',
    cursor: 'pointer',
    _hover: {
      background: '#F9FAFB',
    }
  }),
}
