import { Component, createMemo } from 'solid-js'

import {
  library,
  icon,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
  faChevronDown,
  faDesktop,
  faGlobe,
  faInfoCircle,
  faRotate,
  faVolumeHigh,
  faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons'
import { cva, cx } from '@style/css'

library.add(
  faArrowLeft,
  faArrowRight,
  faGlobe,
  faDesktop,
  faChevronDown,
  faArrowUpRightFromSquare,
  faRotate,
  faInfoCircle,
  faVolumeXmark,
  faVolumeHigh,
)

interface IconProps {
  prefix?: IconPrefix
  iconName: IconName
  size: 'small' | 'medium' | 'large'
  class?: string
  onClick?: () => void
}

export const Icon: Component<IconProps> = props => {
  const iconObj = createMemo(() =>
    icon({ prefix: props.prefix ?? 'fas', iconName: props.iconName }),
  )
  const viewBox = createMemo(
    () => `0 0 ${iconObj().icon[0]} ${iconObj().icon[1]}`,
  )
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox()}
      width={24}
      height={24}
      class={cx(styles.icon({ size: props.size }), props.class)}
      fill="currentColor"
      onClick={props.onClick}
    >
      <path d={iconObj().icon[4] as string} />
    </svg>
  )
}

const styles = {
  icon: cva({
    base: {
      display: 'inline-block',
      height: 'var(--icon-size)',
      width: 'var(--icon-size)',
    },
    variants: {
      size: {
        small: { '--icon-size': '16px' },
        medium: { '--icon-size': '24px' },
        large: { '--icon-size': '32px' },
      },
    },
  }),
}
