import { Component, Fragment } from 'react';
import Link from 'next/link'
import css from './MainMenuMobile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { slide as Menu } from 'react-burger-menu'

class MainMenuMobile extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <Fragment>
        <div className={`row menu__mobile d-flex d-lg-none ${css.menu__mobile}`}>
          <div className="col-2 d-block d-lg-none ">
            <div className={`logo ${css.mobile__logo}`}>
              <Link href="/"><a><img className={`${css.logo__img}`} src="/static/assets/images/logo/logo.jpg" alt="logo aya chinese" /></a></Link>
            </div>
          </div>
          <div className="col-8 d-block d-lg-none text-center">
            <div className={css.text___title}>AYA CHINESE</div>
          </div>
          <div className="col-2 d-block d-lg-none">
            <div className={css.hamburger} onClick={() => { this.setState({ open: true }) }}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
          
        </div>
        <Menu isOpen={this.state.open || false} customBurgerIcon={false}>
          <a id="home" className="menu-item" href="/"><div>หน้าหลัก</div></a>
          <a id="courses" className="menu-item" href="/courses"><div>คอร์สเรียนภาษาจีน</div></a>
          <a id="universities" className="menu-item" href="/universities"><div>หลักสูตรเรียนต่อต่างประเทศ</div></a>
          <a id="reviews" className="menu-item" href="/reviews"><div>รีวิว</div></a>
          <a id="contacts" className="menu-item" href="/contacts"><div>ติดต่อเรา</div></a>
          <div className="row">
            <div className={`col-12 d-block d-lg-none ${css.mobile__icons}`}>
              <ul className="header__sidebar__right d-flex justify-content-center align-items-center">
                <li className="fb" onClick={() => { window.open('https://www.facebook.com/AYA.TeachingChinese/') }}><a target="_blank" /></li>
                <li className="line" onClick={() => { window.open('https://line.me/ti/p/@ayachinese') }}><a target="_blank" /></li>
                <li className="youtube" onClick={() => { window.open('https://www.youtube.com/channel/UCVky4PrbWWDyC4hrYwVN64w') }}><a target="_blank" /></li>
              </ul>
            </div>
            <div className="col-12 text-center">
              {/* <div className={`${css.tel}`}>
                <Link href="tel://+6621023593">
                  <a>
                    <span className={css.number}>02 - 102 3593</span>
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </Menu>
      </Fragment>
    )
  }
}

export default MainMenuMobile;