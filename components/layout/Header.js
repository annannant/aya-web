import { Component } from 'react'
import MainMenu from './MainMenu';
import MainMenuMobile from './MainMenuMobile';

class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <header id="wn__header" className="header__area header__absolute">
          <div className="container" >
            <MainMenu />
            <MainMenuMobile />
            <div className="mobile-menu d-block d-lg-none">
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header;