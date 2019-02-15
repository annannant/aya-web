import { Component } from 'react'
import MainMenu from './MainMenu';
// import MainMenuMobile from './MainMenuMobile';
import MainMenuMobile from './MainMenuMobileV2';

import css from './Header.scss';

class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    let className = `header__area ${css.header__menu} `;
    if (this.props.onTop === true) {
      className += ` ${css.header__menuspace}`
    };
    return (
      <header id="wn__header" className={`${className}`} >
        <div className="container " >
          <MainMenuMobile page={this.props.page}/>
          <MainMenu page={this.props.page} />
        </div>
      </header >
    )
  }
}

export default Header;