import { BadGoodToggle } from '@/components/ui/BadGoodToggle'
import { Overlap } from '@/components/ui/Overlap'
import { Image } from '@/components/ui/Image'
import { ScrollTarget } from '@/components/ui/ScrollTarget'
import { ProjectComponentProps } from '@/models'
import { css } from '@style/css'
import { Component } from 'solid-js'
import { Columns } from '@/components/ui/Columns'
import { Card } from '@/components/ui/Card'
import { PlanCard } from '@/components/ui/PlanCard'
import { EmojiCard } from '@/components/ui/EmojiCard'
import { CardTabGroup } from '@/components/ui/CardTabGroup'

export const AutomationWorkflowsCasePage: Component<
  ProjectComponentProps
> = props => {
  return (
    <>
      <ScrollTarget id="overview" headerRef={props.headerRef} />
      <BadGoodToggle
        bad={{
          title:
            'The Problem: Rule creation process is complex and restrictive',
          bullets: [
            <>
              <strong>Limited functionality:</strong> Users can only create “1
              trigger – 1 action” rules, forcing them to build multiple rules
              for one flow.
            </>,
            <>
              <strong>Unclear logic:</strong> The setup process is confusing,
              making it hard to understand when and how rules run.
            </>,
            <>
              <strong>Redundant options:</strong> Features like execution policy
              or level add noise without real value.
            </>,
            <>
              <strong>Poor UX:</strong> The interface feels complex, unreliable,
              and difficult to use, reducing trust and satisfaction.
            </>,
          ],
          content: (
            <Overlap
              items={[
                <Image src="/cases/scalable-automation/problem-1.png" />,
                <Image src="/cases/scalable-automation/problem-2.png" />,
              ]}
            />
          ),
        }}
        good={{
          title:
            'The Solution: A simpler, smarter, and more scalable automation builder.',
          bullets: [
            'A simplified, step-by-step structure makes the process clear and easy to follow.',
            'Support for multiple actions allows users to build one rule that performs several outcomes.',
            'Improved usability highlights help users quickly focus on key information.',
            'Enhanced scalability prepares the system for introducing new rule types in the future.',
          ],
          content: <Image src="/cases/scalable-automation/sollution.png" />,
        }}
      />
      <ScrollTarget id="plan" headerRef={props.headerRef} />
      <h2 class={styles.sectionTitle}>Our Plan</h2>
      <Columns number={3} breakpoint="lg">
        <PlanCard
          preheader="1 cycle: Foundation"
          title="Simplify rule creation and reduce friction for users."
        >
          <p>Introduce an easy automation builder.</p>
          <p>Remove redundant settings (execution level, policy).</p>
          <p>Clarify triggers and actions terminology.</p>
          <p>Define design patterns for the new rule setup flow.</p>
        </PlanCard>
        <PlanCard
          preheader="2 cycle:  Expansion"
          title="Improve control, visibility, and transparency."
        >
          <p>Add time-based automations and expand trigger/action options.</p>
          <p>Build a rule overview dashboard.</p>
          <p>Show execution state (active, paused, failed).</p>
          <p>Introduce basic logging and success indicators.</p>
        </PlanCard>
        <PlanCard
          preheader="3 cycle:  Transparency"
          title="Build user trust through clarity and stability."
        >
          <p>Create detailed rule execution summaries.</p>
          <p>Visualise success and failure results.</p>
          <p>Improve reliability and reduce bugs in automation execution.</p>
          <p>
            Prepare foundation for multi-action and integrations in future
            cycles.
          </p>
        </PlanCard>
      </Columns>
      <ScrollTarget id="success-criteria" headerRef={props.headerRef} />
      <h2 class={styles.sectionTitle}>Success criteria</h2>
      <Columns number={4} breakpoint="4-2-1">
        <EmojiCard emoji="️⏳" title="Efficiency">
          Reduce the average time to create a rule.
        </EmojiCard>
        <EmojiCard emoji="🎯" title="Completion">
          Increase rule completion rate and reduce abandoned setups.
        </EmojiCard>
        <EmojiCard emoji="💬" title="User Trust">
          Improve user satisfaction with the rule creation experience
          (CSAT/NPS).
        </EmojiCard>
        <EmojiCard emoji="🏗️" title="Scalability">
          Lay a scalable foundation for adding new features (multi-actions, AI
          blocks).
        </EmojiCard>
      </Columns>
      <h2 class={styles.sectionSubtitle}>Internal metric goals</h2>
      <Columns number={3} breakpoint="lg">
        <EmojiCard emoji="📉" title="Reliability">
          30% fewer support tickets related to automation issues.
        </EmojiCard>
        <EmojiCard emoji="⏱" title="Performance">
          40% improvement in successful rule executions without manual
          intervention.
        </EmojiCard>
        <EmojiCard emoji="✅" title="Validation">
          Positive qualitative feedback from internal testers and power users.
        </EmojiCard>
      </Columns>
      <ScrollTarget id="process" headerRef={props.headerRef} />
      <h2 class={styles.sectionTitle}>Process</h2>
      <p>
        Here’s a quick look at how we moved from early design ideas to a fully
        tested and released feature.
      </p>
      <CardTabGroup
        cards={[
          {
            title: 'Design & User test',
            description:
              'We tested two design approaches and chose the one that proved most intuitive for users.',
            content: (
              <>
                <p>
                  We conducted two rounds of user testing with different
                  interface versions, which helped us identify the right
                  direction early and gather valuable feedback.
                </p>
                <Image
                  src="/cases/scalable-automation/design-and-user-test.png"
                  noStyle
                />
              </>
            ),
          },
          {
            title: 'Delivery & Validation',
            description: 'Worked closely with developers and domain experts ',
            content: (
              <>
                <p>
                  At this stage, we went through multiple iterations with
                  developers and domain experts to study the legacy system and
                  understand how all existing actions function.
                </p>
                <Image
                  src="/cases/scalable-automation/delivery-and-validation.png"
                  noStyle
                />
              </>
            ),
          },
          {
            title: 'Launch',
            description:
              'Released the new rule creation experience and tracked key metrics',
            content: (
              <>
                <p>
                  Rule creation time decreased by 35%, and successful rule
                  execution improved by 40%.
                </p>
                <Image src="/cases/scalable-automation/launch.png" noStyle />
              </>
            ),
          },
          {
            title: 'Post-launch Iteration',
            description:
              'Refined the review step and visibility of rule execution based on user feedback.',
            content: (
              <>
                <p>
                  After launch, we continued improving the experience based on
                  user feedback and system data. At the same time, we started
                  exploring the next phase — testing time-based automation to
                  expand the platform’s capabilities.
                </p>
                <Image
                  src="/cases/scalable-automation/post-launch-iteration.png"
                  noStyle
                />
              </>
            ),
          },
        ]}
      />
      <ScrollTarget id="outcome" headerRef={props.headerRef} />
      <h2 class={styles.sectionTitle}>Outcome</h2>
      <Columns number={3} breakpoint="lg">
        <EmojiCard emoji="✅" title="Faster setup">
          Average rule creation time dropped by 60–70% — simple rules take under
          5 minutes, complex ones under 20 minutes.
        </EmojiCard>
        <EmojiCard emoji="✅" title="Higher completion rate">
          Rule completion reached 76%, with fewer abandoned or broken setups.
        </EmojiCard>
        <EmojiCard emoji="✅" title="User satisfaction">
          Customer Effort Score (CES) reached 5/5, and user feedback described
          the new flow as “clear and fast to use.”
        </EmojiCard>
        <EmojiCard emoji="💙" title="User confidence">
          Users can now create and manage automation without developer
          assistance — a major shift in ownership.
        </EmojiCard>
        <EmojiCard emoji="🕐" title="Reduced developer load">
          Support and dev teams reported a significant drop in manual rule
          requests, freeing time for higher-impact work.
        </EmojiCard>
        <EmojiCard emoji="📉" title="Scalable foundation">
          The new architecture supports time-based and AI-driven rules, making
          the system ready for advanced automation.
        </EmojiCard>
      </Columns>
      <ScrollTarget id="conclusions" headerRef={props.headerRef} />
      <h2 class={styles.sectionTitle}>Conclusions</h2>
      <Card>
        <div>
          <strong>Respect the legacy, but don’t let it define you</strong>
        </div>
        <p>
          Working on this project reminded me that legacy systems aren’t
          obstacles — they’re context.
          <br />
          The challenge was not to replace everything, but to decide what
          actually matters now.
          <br />
          That discipline helped us deliver faster and build a stronger
          foundation for the future.
        </p>
      </Card>
    </>
  )
}

const styles = {
  sectionTitle: css({
    textStyle: 'sectionTitle',
    mb: 'spacing-16',
  }),
  sectionSubtitle: css({
    textStyle: 'sectionSubtitle',
    mb: 'spacing-16',
  }),
}
