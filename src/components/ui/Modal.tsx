import { Component, JSX } from 'solid-js'
import { css } from '@style/css'

interface ModalProps {
  children: JSX.Element
  close?: () => void
}

export const Modal: Component<ModalProps> = props => {
  return (
    <div class={styles.backdrop} onClick={props.close}>
      <div class={styles.modal} onClick={e => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  )
}

const styles = {
  backdrop: css({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  }),
  modal: css({
    position: 'relative',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    minWidth: '300px',
    maxWidth: '90vw',
    maxHeight: '80vh',
    overflowY: 'auto',
  }),
}
