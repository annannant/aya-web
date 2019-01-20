import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

import css from './MainMenu.scss';

class MainMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={`row menu ${css.menu__box}`}>
        <div className="col-lg-10 d-none d-lg-block nopadding">
          <div className="logo">
            <Link href="/"><a><img src="/static/assets/images/logo/logo.jpg" alt="logo aya chinese" /></a></Link>
          </div>
          <nav className="mainmenu__nav">
            <ul className="meninmenu d-flex justify-content-start">
              <li className="drop with--one--item"><Link href="/"><a><div>หน้าหลัก</div></a></Link></li>
              <li className="drop with--one--item"><Link href="/courses"><a><div>คอร์สเรียนภาษาจีน</div></a></Link></li>
              <li className="drop with--one--item"><Link href="/universities"><a><div>ข้อมูลมหาลัย</div></a></Link></li>
              <li className="drop with--one--item"><Link href="/reviews"><a><div>รีวิว</div></a></Link></li>
              <li className="drop with--one--item"><Link href="/contacts"><a><div>ติดต่อเรา</div></a></Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-md-6 col-sm-6 col-6 col-lg-2 d-none d-lg-block">
          {/* <ul className={`header__sidebar__right d-flex justify-content-end align-items-center header__social ${css.header__social}`}>
            <li>
              <Link href="https://www.facebook.com/AYA.TeachingChinese/">
                <a target="_blank"><img src="/static/assets/images/icons/facebook.png" alt="aya facebook" className={css.icon__social} /></a>
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/AYA.TeachingChinese/">
                <a target="_blank"><img src="/static/assets/images/icons/ig.png" alt="aya instagram" className={css.icon__social} /></a>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/channel/UCVky4PrbWWDyC4hrYwVN64w">
                <a target="_blank"><img src="/static/assets/images/icons/youtube.png" alt="aya youtube" className={css.icon__social} /></a>
              </Link>
            </li>
          </ul> */}
          <ul className="header__sidebar__right d-flex justify-content-end align-items-center">
            <li className="fb" onClick={() => { window.open('https://www.facebook.com/AYA.TeachingChinese/') }}><a target="_blank" /></li>
            <li className="ig" onClick={() => { window.open('https://www.facebook.com/AYA.TeachingChinese/') }}><a target="_blank" /></li>
            <li className="youtube" onClick={() => { window.open('https://www.youtube.com/channel/UCVky4PrbWWDyC4hrYwVN64w') }}><a target="_blank" /></li>
          </ul>
          <div className={`d-none d-lg-block contact-tel ${css.tel}`}>
            <Link href="tel://+6621023593">
              <a>
                {/* <span className={css.icon}><FontAwesomeIcon icon="phone" className="fa-flip-horizontal" /></span> */}
                <span className={css.number}>02 - 102 3593</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default MainMenu;