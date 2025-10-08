import type { Component } from 'solid-js';
import { Tabs } from './Tabs';
import { ProjectCards } from './ProjectCards';
import { css } from '../styled-system/css';
import '../styled-system/styles.css'
import './styles/global.css'

const App: Component = () => {
  return (
    <div class={styles.app}>
      <header>
        <hgroup>
          <h1 class={styles.header}>Hi!<br />I’m Alisa Vasileva – Product designer</h1>
          <div class={styles.subheader}>
            <div class={styles.subheaderMain}>7 years of:</div>
            <ul class={styles.subheaderItems}>
              <li class={styles.subheaderItem}>UX/UI</li>
              <li class={styles.subheaderItem}>Design system</li>
              <li class={styles.subheaderItem}>User test</li>
              <li class={styles.subheaderItem}>Business goals</li>
            </ul>
          </div>
          <div class={styles.tagline}>Turning complexity into clarity.</div>
        </hgroup>
        <Tabs class={styles.tabs} />
      </header>
      <main>
        <ProjectCards />
      </main>
    </div>
  );
};

export default App

const styles = {
  app: css({
    fontFamily: 'main',
    textAlign: 'center',
    my: '90px',
    color: 'primary',
  }),
  header: css({
    textStyle: 'title',
  }),
  subheader: css({
    display: 'flex',
    gap: '16px',
    textStyle: 'subtitle',
    justifyContent: 'center',
    mb: '30px',
  }),
  subheaderMain: css({
    color: 'blue',
    fontWeight: 500,
  }),
  subheaderItems: css({
    display: 'flex',
    gap: '24px',
  }),
  subheaderItem: css({
    color: 'secondary',
  }),
  tagline: css({
    display: 'inline-block',
    // textStyle: '',
    fontSize: '24px',
    fontWeight: 600,
    background: 'linear-gradient(to right, var(--colors-blue), var(--colors-magenta))',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    mb: '80px',
  }),
  tabs: css({
    mb: '40px',
  }),
}
