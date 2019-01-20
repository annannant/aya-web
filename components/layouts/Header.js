import { Component } from 'react'
import MainMenu from './MainMenu';
import MainMenuMobile from './MainMenuMobile';

import css from './Header.scss';

class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    let className = `header__area ${css.header__menu}`;
    if (this.props.onTop === true) className += css.header__menuspace;
    return (
      <header id="wn__header" className={`${className}`} >
      <div className="container " >
        <MainMenu />
        <MainMenuMobile />
      </div>
      </header >
    )
  }
}

export default Header;