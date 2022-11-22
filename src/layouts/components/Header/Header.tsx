import { Component, ReactNode } from 'react';
// import ReactDOM from 'react-dom';

import './index.scss'

export class Header extends Component {

  onGithubClick () {
    // https://github.com/PengBoUESTC
    window.location.assign('https://github.com/PengBoUESTC')
  }

  render(): ReactNode {
    return <div className='header'>
      <div className='header--left'>
        {/* header */}
      </div>
      <div className='header--right' onClick={this.onGithubClick}>
        <img width="40px" height="40px" src="https://github.githubassets.com/apple-touch-icon-180x180.png" alt="avatar" />
      </div>
    </div>
  }
}