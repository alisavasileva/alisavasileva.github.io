import { AwardCard } from '@/components/ui/AwardCard'
import { BadGoodToggle } from '@/components/ui/BadGoodToggle'
import { Card } from '@/components/ui/Card'
import { Columns } from '@/components/ui/Columns'
import { EmojiCard } from '@/components/ui/EmojiCard'
import { Image } from '@/components/ui/Image'
import { PlanCard } from '@/components/ui/PlanCard'
import { ScrollTarget } from '@/components/ui/ScrollTarget'
import { Section } from '@/components/ui/Section'
import { ProjectComponentProps } from '@/models'
import { css } from '@style/css'
import { Component } from 'solid-js'

export const PortOperationsCasePage: Component<
  ProjectComponentProps
> = props => {
  return (
    <>
      <ScrollTarget id="overview" headerRef={props.headerRef} />
      <BadGoodToggle
        bad={{
          title: 'The problem: Outdated systems block progress.',
          bullets: [
            'Outdated interfaces and siloed systems slowed down daily operations.',
            'Manual data entry created frequent errors and support requests.',
            'Each department had its own inconsistent UI and workflow logic.',
            'Legacy architecture made it hard to scale or introduce new tools.',
          ],
          content: (
            <Image
              src="/cases/port-operations/bad-version.png"
              alt="Problem picture"
              noStyle
            />
          ),
        }}
        good={{
          title:
            'The solution: Unified digital platform for logistics operations.',
          bullets: [
            'Replaced fragmented legacy tools with one centralised platform for 3,000+ employees.',
            'Introduced a cross-platform design system ensuring consistency across mobile and web.',
            'Simplified workflows, reducing visit-confirmation and dispatch time by 25%.',
            'Automated data exchange to eliminate manual input and reduce human errors.',
            'Added real-time dashboards for better visibility and team coordination.',
          ],
          content: (
            <Image
              src="/cases/port-operations/good-version.png"
              alt="Solution picture"
              noStyle
            />
          ),
        }}
      />
      <div>
        <ScrollTarget id="awards" headerRef={props.headerRef} />
        <h2 class={styles.sectionTitle}>Awards</h2>
        <div class={styles.awards}>
          <AwardCard
            title="Tagline Awards"
            award="Bronze – Best B2B Project"
            image="/awards/tagline.png"
          />
          <AwardCard
            title="Golden Site Awards"
            award="Gold – Transport, Logistics and Delivery Website"
            image="/awards/golden-site.png"
          />
          <AwardCard
            title="WDA Awards"
            award="Bronze – IT Technologies and Online Services"
            image="/awards/wda.png"
          />
        </div>
      </div>
      <div>
        <ScrollTarget id="process" headerRef={props.headerRef} />
        <h3 class={styles.sectionTitle}>Process</h3>
        <p class={styles.sectionDescription}>
          We collaborated with dispatchers and drivers, redesigning each section
          step by step through on-site testing.
        </p>
        <Columns number={3} breakpoint="lg" class={css({ mt: 'spacing-16' })}>
          <PlanCard preheader="Research & prioritisation">
            Mapped daily workflows in the port and identified the most
            time-sensitive tasks.
          </PlanCard>
          <PlanCard preheader="Design & testing">
            Created prototypes, tested with real users in the field, and
            iterated based on qualitative feedback.
          </PlanCard>
          <PlanCard preheader="Implementation">
            Worked closely with developers to align UX logic with technical
            constraints of the legacy systems.
          </PlanCard>
        </Columns>
        <Columns number={2} breakpoint="lg" class={css({ mt: 'spacing-16' })}>
          <PlanCard preheader="Feedback analysis">
            Grouped user comments by role to uncover hidden patterns and clarify
            conflicting feedback.
          </PlanCard>
          <PlanCard preheader="Continuous improvement">
            Used NPS surveys and field observations to prioritise next updates
            and track overall satisfaction.
          </PlanCard>
        </Columns>
      </div>
      <div>
        <ScrollTarget id="outcome" headerRef={props.headerRef} />
        <h3 class={styles.sectionTitle}>Outcome</h3>
        <Columns number={3} breakpoint="lg">
          <EmojiCard emoji="✅" title="6 services launched">
            Including key workflows such as Vehicle Access, Warehouse Closure,
            Pass Requests, Finance, Customs, and Fleet Approach.
          </EmojiCard>
          <EmojiCard emoji="✅" title="High adoption rate">
            80 % of port users regularly use the new services; over 160+ vehicle
            passes created each month.
          </EmojiCard>
          <EmojiCard emoji="✅" title="Simplified daily work">
            Drivers now manage passes directly from mobile, without using 1C or
            calling dispatch.
          </EmojiCard>
          <EmojiCard emoji="🕐" title="Visible operational impact">
            Reduced queues and calmer on-site environment reported by operators.
          </EmojiCard>
          <EmojiCard emoji="🙌🏻" title="User feedback loop">
            Regular NPS surveys and interviews revealed new improvement points;
            user satisfaction steadily increased
          </EmojiCard>
          <EmojiCard emoji="💬" title="Positive perception">
            Feedback highlighted clarity:
            <br />
            “The interface is simple and fast.”
            <br />
            “No longer tied to a workstation.”
            <br />
            “Finally, a tool that just works.”
          </EmojiCard>
        </Columns>
      </div>
      <div>
        <ScrollTarget id="conclusions" headerRef={props.headerRef} />
        <h3 class={styles.sectionTitle}>Conclusions</h3>
        <Card class={styles.card}>
          <div>
            <strong>Transformation grounded in everyday work.</strong>
          </div>
          <p>
            Digital transformation isn’t a one-time launch. It’s a long
            conversation with users.
            <br />
            Over two years, continuous feedback and small, focused improvements
            helped turn complex port operations into a clear and reliable
            system.
          </p>
          <p>
            The real success wasn’t just in building six services.
            <br />
            It was in earning users’ trust and making their work calmer, faster,
            and easier every day.
          </p>
        </Card>
      </div>
    </>
  )
}

const styles = {
  card: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 'spacing-8',
  }),
  awards: css({
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }),
  sectionTitle: css({
    textStyle: 'sectionTitle',
    mb: 'spacing-16',
  }),
  sectionDescription: css({
    textAlign: 'center',
  }),
}
