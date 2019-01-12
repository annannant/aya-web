import { Component } from 'react';
import Link from 'next/link'

class MainMenuMobile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row mobile-menu d-block d-lg-none mean-container">
        <div className="col-lg-12 d-none">
          <nav className="mobilemenu__nav">
            <ul className="meninmenu">
              <li><Link href="/"><a>หน้าหลัก</a></Link></li>
              <li><Link href="/courses"><a>คอร์สเรียนภาษาจีน</a></Link></li>
              <li><Link href="/universities"><a>ข้อมูลมหาลัย</a></Link></li>
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