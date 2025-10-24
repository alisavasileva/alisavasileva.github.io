import { ProjectHeader } from '@/components/ProjectHeader'
import { Card } from '@/components/ui/Card'
import { Columns } from '@/components/ui/Columns'
import { Icon } from '@/components/ui/Icon'
import { Image } from '@/components/ui/Image'
import { Overlap } from '@/components/ui/Overlap'
import { ScrollTarget } from '@/components/ui/ScrollTarget'
import { Section } from '@/components/ui/Section'
import { Toggle } from '@/components/ui/Toggle'
import { Project, Tab } from '@/models'
import { css } from '@style/css'
import { Component } from 'solid-js'

export const CRMDataImportCasePage: Component<{ project: Project }> = props => {
  const tabs: Tab[] = [
    { id: 'overview', name: 'Overview' },
    { id: 'plan', name: 'Plan' },
    { id: 'criteria', name: 'Criteria' },
    { id: 'process', name: 'Process' },
    { id: 'fail', name: 'Fail 🫣', class: styles.failTab },
    { id: 'results', name: 'Results' },
    { id: 'learnings', name: 'Learnings' },
  ]

  let headerRef: HTMLElement | undefined = undefined

  return (
    <>
      <ProjectHeader ref={headerRef} tabs={tabs} project={props.project} />
      <Section class={styles.project} variant="spaced">
        <ScrollTarget id="overview" headerRef={headerRef} />
        <Card>
          <Toggle class={styles.problemToggle} label="Show better version" />
          <h3 class={styles.problemTitle}>The problem: data import was faaaaaar too technical!</h3>
          <ul class={styles.problemBullets}>
            <li>Only technical users could complete imports</li>
            <li>Non-tech users were blocked and had to raise support tickets</li>
            <li>Customer migration turned into a painful process</li>
          </ul>
        </Card>
        <Image src="/cases/crm-data-import-screen-1.png" alt="Problem diagram" />
        <div>
          <h3>Our plan</h3>
          <Columns number={2}>
            <Card class={styles.card}>
              <div class={styles.cardTitleBlue}>1 cycle:</div>
              <div class={styles.cardTitle}>Reduce support load during migrations.</div>
              <p>Guide users through setup with dropdowns, inline validation, and templates.</p>
              <p>Improve error handling — clear messages, visible progress, trust in the process.</p>
              <p>Add asynchronous imports to handle large files safely.</p>
            </Card>
            <Card class={styles.card}>
              <div class={styles.cardTitleBlue}>2-3 cycle:</div>
              <div class={styles.cardTitle}>Make import fully self-serve.</div>
              <p>Replace technical configuration with visual column-to-field mapping.</p>
              <p>Simplify the flow into a short, guided wizard.</p>
              <p>Add progress tracking (progress bar, imports page).</p>
              <p>Track metrics in Amplitude: start/finish, mode (easy/advanced), number of rows.</p>
            </Card>
          </Columns>
        </div>
        <div>
          <h3>Success criteria</h3>
          <Columns number={4}>
            <Card class={styles.card}>
              <span class={styles.iconEmoji}>⏱</span>
              <div class={styles.cardTitle}>Ease of use:</div>
              <p>Import &lt;1000 rows in under 15 min</p>
            </Card>
            <Card class={styles.card}>
              <span class={styles.iconEmoji}>⏰</span>
              <div class={styles.cardTitle}>Efficiency:</div>
              <p>Fewer support requests (import-related tickets ↓ by 60%).</p>
            </Card>
            <Card class={styles.card}>
              <span class={styles.iconEmoji}>🎯</span>
              <div class={styles.cardTitle}>Adoption:</div>
              <p>70% of new imports completed via Quick & Easy Mode.</p>
            </Card>
            <Card class={styles.card}>
              <span class={styles.iconEmoji}>🛡</span>
              <div class={styles.cardTitle}>Reliability:</div>
              <p>0 Jira tickets for mislinked data or missing records.</p>
            </Card>
          </Columns>
        </div>
        <h2>Process</h2>
        <p>We started by exploring how data import works — on the market and inside our product.</p>
        <Card>
          <div><Icon iconName='globe' size='small' class={css({ color: 'blue' })} /> On the market</div>
        </Card>
        <Card>
          <div><Icon iconName='desktop' size='small' class={css({ color: 'blue' })} /> In the product</div>
        </Card>
        <p>Here’s a quick look at how we moved from early design ideas to a fully tested and released feature.</p>
        <Columns number={4}>
          <Card class={styles.card}>
            <div class={styles.cardTitle}>Design & User test</div>
            <p>We went through two rounds of design and user testing</p>
          </Card>
          <Card class={styles.card}>
            <div class={styles.cardTitle}>Delivery & Validation</div>
            <p>Collaborated with devs to ensure clarity between design and implementation.</p>
          </Card>
          <Card class={styles.card}>
            <div class={styles.cardTitle}>Launch</div>
            <p>Track KPIs and	Collect feedback for improvements.</p>
          </Card>
          <Card class={styles.card}>
            <div class={styles.cardTitle}>Post-launch Iteration</div>
            <p>Analyse results and compare with success criteria.</p>
          </Card>
        </Columns>
        <Card>
          <p>At this stage the prototype was complete enough to test the full flow, but development had not yet started.Running user tests here reduced risk: we could validate whether non-technical users understood the terminology, trusted the process, and could resolve errors — while changes were still cheap to make.</p>
          <Overlap
            items={[
              <Image src="/cases/crm-data-import-screen-1.png" alt="Prototype screen" />,
              <Image src="/cases/crm-data-import-screen-1.png" alt="Prototype screen" />,
            ]}
          />
        </Card>
        <h2>Outcome</h2>
        <Card>-</Card>
        <h2>Learnings</h2>
        <Card>-</Card>
      </Section>
    </>
  )
}

const styles = {
  project: css({
    mt: 'spacing-24',
    mb: 'spacing-32',
  }),
  failTab: css({
    color: 'red',
  }),
  problemToggle: css({
    position: 'absolute',
    top: 'spacing-24',
    right: 'spacing-24',
  }),
  problemTitle: css({
    color: 'red',
    textStyle: 'tab',
    mb: 'spacing-8',
  }),
  problemBullets: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 'spacing-4',
    '& > li': {
      position: 'relative',
      ml: '30px',
      _before: {
        content: '"❌"',
        position: 'absolute',
        left: -30,
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '0.8em',
      },
    },
  }),
  card: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 'spacing-8',
  }),
  iconEmoji: css({
    fontSize: '32px',
  }),
  cardTitle: css({ textStyle: 'bold' }),
  cardTitleBlue: css({ textStyle: 'bold', color: 'blue' }),
}
