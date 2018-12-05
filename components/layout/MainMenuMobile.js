import { Component } from 'react';
import Link from 'next/link'

class MainMenuMobile extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="row d-none">
          <div className="col-lg-12 d-none">
            <nav className="mobilemenu__nav">
              <ul className="meninmenu">
                <li><Link href="/"><a>หน้าหลัก</a></Link></li>
                <li><Link href="/"><a>คอร์สเรียนภาษาจีน</a></Link></li>
                <li><Link href="/"><a>ข้อมูลมหาลัย</a></Link></li>
                <li><Link href="/"><a>รีวิว</a></Link></li>
                <li><Link href="/"><a>ติดต่อเรา</a></Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default MainMenuMobile;