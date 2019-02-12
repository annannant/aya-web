import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link'
import style from './Footer.scss';

export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer id="wn__footer" className={`footer__area bg__cat--8 brown--color ${style.footer__area}`}>
        <div className="footer-static-top FooterWrapper">
          <div className="container">
            <div className="row">
              {/* <div className={`col-xs-4 col-md-4 text-left ${style.desc__col}`}>
                <div>
                  <h4 className={style.title}>
                    AYA CHINESE., LTD.
                  </h4>
                  <ol className={style.desc__list}>
                    <li>รับสอนภาษาจีนทุกระดับตั้งแต่พื้นฐาน </li>
                    <li>ให้คำปรึกษาและข้อมูลในการศึกษาต่อประเทศจีน </li>
                    <li>รับติดต่อสถาบัน จัดหาที่เรียน ดำเนินการสมัตรเรียนในทุกระดับ</li>
                  </ol>
                </div>
              </div> */}

              <div className={`offset-md-4 col-xs-4 col-md-4 text-left ${style.desc__col}`}>
                <div className="text-center mb--10">
                  <h4 className={style.title}>
                    AYA CHINESE., LTD.
                  </h4>
                </div>
                <div className={style.contact}>
                  <ul className={style.desc__list}>
                    <li><FontAwesomeIcon icon="map-marker-alt" />บริษัท อายะ ไชนีส จำกัด ชั้น 16 อาคาร พญาไทพลาซ่า ติด BTS และ Airport Link พญาไท ทางออกที่ 1</li>
                    <li style={{ letterSpacing: 1.2 }}>
                      <Link href="tel://+6621023593"><a><FontAwesomeIcon icon="phone" className="fa-flip-horizontal" /> 02-102-3593</a></Link>,
                      <Link href="tel://+66653264945"><a> 065-326-4945</a></Link>
                    </li>
                    <li><FontAwesomeIcon icon="envelope" /> ayachinese@gmail.com</li>
                  </ul>
                </div>
              </div>

              <div className={`col-xs-12 col-md-12 text-center`}>
                <ul className={`social__net social__net--2 d-flex ${style.social__net}`}>
                  <li>
                    <Link href="https://www.facebook.com/AYA.TeachingChinese/">
                      <a target="_blank">
                        <img src="/static/assets/images/icons/facebook.png" alt="aya facebook" className={style.icon__social} />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://line.me/ti/p/@ayachinese">
                      <a target="_blank">
                        <img src="/static/assets/images/icons/line.png" alt="aya instagram" className={style.icon__social} />
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
                  <li>
                    <Link href="https://www.instagram.com/ayachinese/">
                      <a target="_blank">
                        <img src="/static/assets/images/icons/ig.png" alt="aya instagram" className={style.icon__social} />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright__wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="copyright">
                  <div className="copy__right__inner text-center">
                    <p>Copyright <i className="fa fa-copyright" /> <a href="#">AYA Chinese.</a> All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}