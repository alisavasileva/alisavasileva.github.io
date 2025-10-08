import { CompanyName } from '@/components/ui/CompanyName'
import { Section } from '@/components/ui/Section'
import { Table } from '@/components/ui/Table'
import { Product, Products } from '@/data/products'
import { css, cx } from '@style/css'
import { Component } from 'solid-js'

export const ProductsPage: Component = () => {
  return (
    <Section width="wide">
      <Table
        class={styles.table}
        cellClass={styles.cell}
        showHeader={false}
        columns={[
          { title: 'Product' },
          { title: 'Role', width: '2fr' },
          { title: 'Company' },
          { title: 'Platform' },
          { title: 'Years', width: 'max-content' },
        ]}
        data={Products.map(product => [
          <ProductName product={product} />,
          product.role,
          <CompanyName company={product.company} link />,
          product.platform,
          product.years,
        ])}
        variant="lines"
      />
    </Section>
  )
}

const ProductName: Component<{ product: Product }> = props => {
  return (
    <div class={styles.company}>
      {props.product.link ? (
        <a
          class={cx(styles.companyName, 'link')}
          href={props.product.link}
          target="_blank"
        >
          {props.product.name}
        </a>
      ) : (
        <div class={styles.companyName}>{props.product.name}</div>
      )}
      <div class={styles.companyType}>{props.product.type}</div>
    </div>
  )
}

const styles = {
  table: css({
    textAlign: 'left',
  }),
  cell: css({
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  }),
  company: css({
    textAlign: 'left',
  }),
  companyName: css({
    color: 'primary',
    textStyle: 'base',
  }),
  companyType: css({
    color: 'secondary',
    textStyle: 'small',
  }),
}
