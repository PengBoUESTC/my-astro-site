import { Component, ReactNode } from 'react'

import './index.scss'

export class Main extends Component {
  render(): ReactNode {
    return <div className='main-wrapper'>
      <slot></slot>
    </div>
  }
}