import { Component } from 'react';
import Link from 'next/link'

import css from './MainMenuMobile.scss';
import cssMain from './MainMenu.scss';

class MainMenuMobile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`row ${css.menu__mobile}`}>
        <div className={`col-sm-12 col-md-12 d-block d-lg-none nopadding ${css.sec__top}`}>
          <Link href="tel://+6621023593"><a><span className={css.number}>02 - 102 3593</span></a></Link>
        </div>
        <div className={`col-sm-12 col-md-12 d-block d-lg-none nopadding`}>
          <div className={`${css.rigth__items}`}> 
            <div className="row">
              <div className="col-6">
                <div className={`logo ${css.mobile__logo}`}>
                  <Link href="/"><a><img className={`${css.logo__img}`} src="/static/assets/images/logo/logo.jpg" alt="logo aya chinese" /></a></Link>
                </div>
              </div>
              <div className="col-6">
                <ul className="header__sidebar__right d-flex justify-content-end align-items-center">
                <li className="fb" onClick={() => { window.open('https://www.facebook.com/AYA.TeachingChinese/') }}><a target="_blank" /></li>
                <li className="line" onClick={() => { window.open('https://line.me/ti/p/@ayachinese') }}><a target="_blank" /></li>
                {/* <li className="ig" onClick={() => { window.open('https://www.instagram.com/ayachinese/') }}><a target="_blank" /></li> */}
                <li className="youtube" onClick={() => { window.open('https://www.youtube.com/channel/UCVky4PrbWWDyC4hrYwVN64w') }}><a target="_blank" /></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mobile-menu mean-container"></div>
          <nav className="mobilemenu__nav d-none">
            <ul className="meninmenu">
              <li><Link href="/"><a>หน้าหลัก</a></Link></li>
              <li><Link href="/courses"><a>คอร์สเรียนภาษาจีน</a></Link></li>
              <li><Link href="/universities"><a>หลักสูตรเรียนต่อต่างประเทศ</a></Link></li>
              <li><Link href="/reviews"><a>รีวิว</a></Link></li>
              <li><Link href="/contacts"><a>ติดต่อเรา</a></Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default MainMenuMobile;