import { Component } from 'react'
import MainMenu from './MainMenu';
import MainMenuMobile from './MainMenuMobile';

import css from './Header.scss';

class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <header id="wn__header" className={`header__area ${css.header__menu} ${this.props.classNames}`}>
        <div className="container " >
          <MainMenu />
          <MainMenuMobile />
        </div>
      </header>
    )
  }
}

export default Header;