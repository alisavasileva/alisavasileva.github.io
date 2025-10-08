import { Component, createMemo, For, JSX, Show } from 'solid-js'
import { css, cva, cx } from '@style/css'

interface TableProps {
  columns: {
    title: string
    width?: string
  }[]
  data: JSX.Element[][]
  class?: string
  cellClass?: string
  showHeader?: boolean
  variant?: 'lines' | 'grid'
}

export const Table: Component<TableProps> = props => {
  const columns = createMemo(() =>
    props.columns.map(col => col.width ?? '1fr').join(' '),
  )

  const showHeader = () => props.showHeader ?? true

  return (
    <div
      class={cx(styles.table({ variant: props.variant }), props.class)}
      style={{
        'grid-template-columns': columns(),
      }}
    >
      <Show when={showHeader()}>
        <div class={styles.headerRow} data-row="header">
          <For each={props.columns}>
            {(col, c) => (
              <div
                class={cx(
                  styles.cell({
                    firstColumn: c() === 0,
                    firstRow: true,
                    header: true,
                    variant: props.variant,
                  }),
                  props.cellClass,
                )}
                data-cell={c()}
              >
                {col.title}
              </div>
            )}
          </For>
        </div>
      </Show>
      <For each={props.data}>
        {(row, r) => (
          <div class={styles.row} data-row={r()}>
            <For each={row}>
              {(cell, c) => (
                <div
                  class={cx(
                    styles.cell({
                      firstColumn: c() === 0,
                      firstRow: !showHeader() && r() === 0,
                      variant: props.variant,
                    }),
                    props.cellClass,
                  )}
                  data-cell={c()}
                >
                  {cell}
                </div>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  )
}

const outerBorderColor = '#DDDDDD'
const cellBorderColor = '#00000015'

const styles = {
  table: cva({
    base: {
      display: 'grid',
      gap: '0',
      border: `1px solid ${outerBorderColor}`,
      borderRadius: '8px',
      background: 'white',
    },
    variants: {
      variant: {
        lines: {
          borderRadius: '0',
          border: 'none',
        },
        grid: {},
      },
    },
  }),
  headerRow: css({
    display: 'contents',
  }),
  headerCell: css({}),
  row: css({
    display: 'contents',
  }),
  cell: cva({
    base: {
      borderTop: `1px solid ${cellBorderColor}`,
      borderLeft: `1px solid ${cellBorderColor}`,
      p: 'spacing-16',
    },
    variants: {
      firstColumn: {
        true: {
          borderLeft: 'none',
        },
      },
      firstRow: {
        true: {
          borderTop: 0,
        },
      },
      header: {
        true: {
          fontWeight: '600',
        },
      },
      variant: {
        lines: {
          borderLeft: 'none',
        },
        grid: {},
      },
    },
  }),
}
