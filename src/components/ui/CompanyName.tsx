import { Component, createMemo } from 'solid-js'
import { Companies, Company } from '@/models'
import { css, cx } from '@style/css'

interface CompanyNameProps {
  company: Company
  link?: boolean
}

export const CompanyName: Component<CompanyNameProps> = props => {
  const company = createMemo(() => Companies[props.company])

  const content = (
    <>
      <img class={styles.companyIcon} src={company().logo} />
      <span>{company().name}</span>
    </>
  )

  return props.link ? (
    <a
      class={cx(styles.company, 'link')}
      href={company().website}
      target="_blank"
    >
      {content}
    </a>
  ) : (
    <div class={styles.company}>{content}</div>
  )
}

const styles = {
  company: css({
    display: 'flex',
    alignItems: 'center',
    gap: 'spacing-8',
  }),
  companyIcon: css({
    height: '21px',
  }),
}
