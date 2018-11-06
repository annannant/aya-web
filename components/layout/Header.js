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
        <header id="wn__header" className="header__area header__absolute sticky__header">
          <div className="container-fluid" >
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