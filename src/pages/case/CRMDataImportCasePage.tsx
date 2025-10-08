import { BadGoodToggle } from '@/components/ui/BadGoodToggle'
import { Card } from '@/components/ui/Card'
import { CardTabGroup } from '@/components/ui/CardTabGroup'
import { Columns } from '@/components/ui/Columns'
import { EmojiCard } from '@/components/ui/EmojiCard'
import { ExpandCard } from '@/components/ui/ExpandCard'
import { Icon } from '@/components/ui/Icon'
import { Image } from '@/components/ui/Image'
import { Overlap } from '@/components/ui/Overlap'
import { PlanCard } from '@/components/ui/PlanCard'
import { ScrollTarget } from '@/components/ui/ScrollTarget'
import { Table } from '@/components/ui/Table'
import { ProjectComponentProps } from '@/models'
import { css } from '@style/css'
import { Component } from 'solid-js'

export const CRMDataImportCasePage: Component<
  ProjectComponentProps
> = props => {
  return (
    <>
      <ScrollTarget id="overview" headerRef={props.headerRef} />
      <BadGoodToggle
        bad={{
          title: 'The problem: data import was faaaaaar too technical!',
          bullets: [
            'Only technical users could complete import',
            'Non-tech users were blocked and had to raise support ticket',
            'Customer migration turned into a painful process',
          ],
          content: (
            <Image
              src="/cases/crm-data-import/bad-version.png"
              alt="Problem diagram"
            />
          ),
        }}
        good={{
          title:
            'The solution: make data import simple, fast, and accessible for everyone.',
          bullets: [
            'Language simplified so everyone can understand it.',
            'Early error feedback shows what to fix right away.',
            'Imports run faster and handle more rows.',
          ],
          content: (
            <Image
              src="/cases/crm-data-import/good-version.png"
              alt="Problem diagram"
            />
          ),
        }}
      />
      <div>
        <ScrollTarget id="plan" headerRef={props.headerRef} />
        <h3 class={styles.sectionTitle}>Our plan</h3>
        <Columns number={2} breakpoint="lg">
          <PlanCard
            preheader="1 cycle:"
            title="Reduce support load during migrations."
          >
            <p>
              Guide users through setup with dropdowns, inline validation, and
              templates.
            </p>
            <p>
              Improve error handling — clear messages, visible progress, trust
              in the process.
            </p>
            <p>Add asynchronous imports to handle large files safely.</p>
          </PlanCard>
          <PlanCard
            preheader="2-3 cycle:"
            title="Make import fully self-serve."
          >
            <p>
              Replace technical configuration with visual column-to-field
              mapping.
            </p>
            <p>Simplify the flow into a short, guided wizard.</p>
            <p>Add progress tracking (progress bar, imports page).</p>
            <p>
              Track metrics in Amplitude: start/finish, mode (easy/advanced),
              number of rows.
            </p>
          </PlanCard>
        </Columns>
      </div>
      <div>
        <ScrollTarget id="success-criteria" headerRef={props.headerRef} />
        <h3 class={styles.sectionTitle}>Success criteria</h3>
        <Columns number={4} breakpoint="4-2-1">
          <EmojiCard emoji="⏱" title="Ease of use">
            Import &lt;1000 rows in under 15 min
          </EmojiCard>
          <EmojiCard emoji="⏰" title="Efficiency">
            Fewer support requests (import-related tickets ↓ by 60%).
          </EmojiCard>
          <EmojiCard emoji="🎯" title="Adoption">
            70% of new imports completed via Quick & Easy Mode.
          </EmojiCard>
          <EmojiCard emoji="🛡" title="Reliability">
            0 Jira tickets for mislinked data or missing records.
          </EmojiCard>
        </Columns>
      </div>
      <ScrollTarget id="process" headerRef={props.headerRef} />
      <h2 class={styles.sectionTitle}>Process</h2>
      <p>
        We started by exploring how data import works — on the market and inside
        our product.
      </p>
      <ExpandCard
        title={
          <div class={styles.expandCardTitle}>
            <Icon
              iconName="globe"
              size="small"
              class={css({ color: 'blue' })}
            />{' '}
            On the market
          </div>
        }
      >
        <p>
          In my research, I also included indirect competitors, since it is
          important to look at products that make complex processes simple. I
          chose <strong>Airtable</strong> and <strong>Notion</strong>.
        </p>
        <Image
          class={css({ mt: 'spacing-16 ' })}
          src="/cases/crm-data-import/on-the-market.png"
          alt="On the market"
          noStyle
        />
      </ExpandCard>
      <ExpandCard
        title={
          <div class={styles.expandCardTitle}>
            <Icon
              iconName="desktop"
              size="small"
              class={css({ color: 'blue' })}
            />{' '}
            In the product
          </div>
        }
      >
        <p>
          After a series of interviews, we arrived at these conclusions and set
          priorities.
        </p>
        <Table
          class={styles.inProductTable}
          columns={[
            { title: 'Key Findings' },
            { title: 'Opportunities' },
            { title: 'Priority', width: 'min-content' },
          ]}
          data={[
            [
              'Users find "configuration", "variables" "pipeline" unclear.',
              'Improve terminology and interface language',
              '1',
            ],
            ['', 'Make "Advanced settings" for tech users', '1'],
            [
              'Pipeline configuration feels too technical',
              'Provide contextual guidance',
              '2',
            ],
            [
              'Error messages are unclear and hard to act on',
              'Improve error messages',
              '2',
            ],
            [
              'Users want import to run in the background with clear progress',
              'Allow imports to run in the background',
              '3',
            ],
            ['Users are supportive of adding Al features.', 'AI', '4'],
          ]}
        />
      </ExpandCard>
      <p>
        Here’s a quick look at how we moved from early design ideas to a fully
        tested and released feature.
      </p>
      <CardTabGroup
        cards={[
          {
            title: 'Design & User test',
            description:
              'We went through two rounds of design and user testing',
            content: (
              <>
                <p>
                  At this stage the prototype was complete enough to test the
                  full flow, but development had not yet started.Running user
                  tests here reduced risk: we could validate whether
                  non-technical users understood the terminology, trusted the
                  process, and could resolve errors — while changes were still
                  cheap to make.
                </p>
                <Overlap
                  class={css({ mt: 'spacing-16' })}
                  items={[
                    <Image
                      src="/cases/crm-data-import/design-and-user-test-1.png"
                      alt="Prototype screen"
                      noStyle
                    />,
                    <Image
                      src="/cases/crm-data-import/design-and-user-test-2.png"
                      alt="Prototype screen"
                      noStyle
                    />,
                  ]}
                />
              </>
            ),
          },
          {
            title: 'Delivery & Validation',
            description:
              'Collaborated with devs to ensure clarity between design and implementation.',
            content: (
              <Image
                src="/cases/crm-data-import/design-and-validation.png"
                noStyle
              />
            ),
          },
          {
            title: 'Launch',
            description: 'Track KPIs and	Collect feedback for improvements.',
            content: <Image src="/cases/crm-data-import/launch.png" noStyle />,
          },
          {
            title: 'Post-launch Iteration',
            description: 'Analyse results and compare with success criteria.',
            content: (
              <>
                <p>
                  After launch, we reviewed results against success criteria.
                  The new flow reduced import time, boosted user autonomy, and
                  lowered support requests — helping us plan the next round of
                  improvements.
                </p>
                <Image
                  class={css({ mt: 'spacing-16' })}
                  src="/cases/crm-data-import/post-launch-iteration.png"
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
        <EmojiCard emoji="✅" title="Faster process">
          Import time dropped by over 50% — from about 30 to 15 minutes for a
          1k-row file, cutting waiting time in half for non-technical users.
        </EmojiCard>
        <EmojiCard emoji="✅" title="Fewer tickets">
          Import-related support tickets decreased by 40%, freeing the team to
          focus on customer success.
        </EmojiCard>
        <EmojiCard emoji="✅" title="Higher adoption">
          Within two months, over 70% of imports were completed via Easy Mode.
        </EmojiCard>
        <EmojiCard emoji="💙" title="User confidence">
          User trust increased — test participants felt confident completing
          imports on their own.
        </EmojiCard>
        <EmojiCard emoji="💬" title="Direct feedback">
          One message said it best — “Finally, no more pipelines!”
        </EmojiCard>
        <EmojiCard emoji="🤝" title="Internal impact">
          Support teams felt the shift too — fewer emergencies, more focus on
          meaningful work.
        </EmojiCard>
      </Columns>

      <ScrollTarget id="conclusions" headerRef={props.headerRef} />
      <h2 class={styles.sectionTitle}>Conclusion</h2>
      <Card class={styles.card}>
        <div>
          <strong>It’s not about teaching, it’s about enabling</strong>
        </div>
        <p>
          This project taught me that simplicity is not the absence of depth —
          it’s clarity through empathy.
          <br />
          At first, I tried to make users understand the system. Later I
          realised they didn’t need to — they just needed to get things done
          easily and confidently.
          <br />
          That shift in mindset changed how I approach every product challenge
          now.
        </p>
      </Card>
    </>
  )
}

const styles = {
  card: css({
    display: 'flex',
    flexDirection: 'column',
    gap: 'spacing-8',
  }),
  inProductTable: css({
    mt: 'spacing-16',

    '& > :is([data-row="0"], [data-row="1"]) [data-cell]': {
      background: '#FFECBD',
    },
    '& > :is([data-row="2"], [data-row="3"]) [data-cell]': {
      background: '#CDF4D3',
    },
    '& > :is([data-row="4"]) [data-cell]': {
      background: '#FFC7C2',
    },
    '& > :is([data-row="5"]) [data-cell]': {
      background: '#C2E5FF',
    },
  }),
  expandCardTitle: css({
    display: 'flex',
    alignItems: 'center',
    gap: 'spacing-8',
  }),
  sectionTitle: css({
    textStyle: 'sectionTitle',
    mb: 'spacing-16',
  }),
}
