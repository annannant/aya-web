import { Component } from 'react';
import Link from 'next/link'
import style from './MainMenu.scss';

class MainMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{ paddingLeft: 0, paddingRight: 0, maxWidth: '' }}>
        <div className="row MainMenu">
          <div className="col-md-6 col-sm-6 col-6 col-lg-2">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/static/assets/images/logo/logo.jpg" alt="logo images" />
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
                <a className="" href="#" ><i className="bi bi-facebook" /></a>
              </li>
              <li>
                <a className="" href="#" ><i className="bi bi-twitter" /></a>
              </li>
              <li>
                <a className="" href="#" ><i className="bi bi-youtube" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MainMenu;