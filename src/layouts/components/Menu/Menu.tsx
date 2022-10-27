import { Component, ReactNode } from 'react'

import './index.scss'

export interface MenuList {
  name: string;
  url?: string;
  pathname?: string;
}

export interface Props {
  menuList: MenuList[]
}
export class Menu extends Component<Props> {

  render(): ReactNode {
    const { menuList } = this.props
    return <div className='menu-wrapper'>
      {
        menuList.map(({ name, url, pathname }) => {
          return <a
              href={`${pathname}${url}`}
              key={name}>
                { name }
            </a>
        })
      }
    </div>
  }

  static defaultProps = {
    menuList: []
  }
}
