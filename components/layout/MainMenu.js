import { Component } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './MainMenu.scss';

class MainMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ paddingLeft: 0, paddingRight: 0, maxWidth: '' }}>
        <div className="row MainMenu">
          <div className="col-md-6 col-sm-6 col-6 col-lg-2 text-center Logo">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/static/assets/images/logo/logo.jpg" alt="logo aya chinese" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-8 d-none d-lg-block">
            <nav className="mainmenu__nav">
              <ul className="meninmenu d-flex justify-content-start">
                <li className="drop with--one--item"><Link href="/"><a>หน้าหลัก</a></Link></li>
                <li className="drop with--one--item"><Link href="/"><a>คอร์สเรียนภาษาจีน</a></Link></li>
                <li className="drop with--one--item"><Link href="/"><a>ข้อมูลมหาลัย</a></Link></li>
                <li className="drop with--one--item"><Link href="/"><a>รีวิว</a></Link></li>
                <li className="drop with--one--item"><Link href="/"><a>ติดต่อเรา</a></Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-md-6 col-sm-6 col-6 col-lg-2">
            <ul className={`header__sidebar__right d-flex justify-content-end align-items-center header__social ${style.header__social}`}>
              <li>
                <Link href="https://www.facebook.com/AYA.TeachingChinese/">
                  <a target="_blank">
                    <img src="/static/assets/images/icons/facebook.png" alt="aya facebook" className={style.icon__social} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/AYA.TeachingChinese/">
                  <a target="_blank">
                    <img src="/static/assets/images/icons/twitter.png" alt="aya twitter" className={style.icon__social} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UCVky4PrbWWDyC4hrYwVN64w">
                  <a target="_blank">
                    <img src="/static/assets/images/icons/youtube.png" alt="aya youtube" className={style.icon__social} />
                  </a>
                </Link>
              </li>
            </ul>
            <div className={style.tel}>
              <Link href="tel://+6621023593">
                <a>
                  <span className={style.icon}><FontAwesomeIcon icon="phone" className="fa-flip-horizontal" /></span>
                  <span className={style.number}>02 - 102 3593</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainMenu;