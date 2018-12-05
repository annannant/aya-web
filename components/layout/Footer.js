import { Component } from 'react';
import Link from 'next/link'

import './Footer.scss';

export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* Footer Area */}
        <footer id="wn__footer" className="footer__area bg__cat--8 brown--color mt--100">
          <div className="footer-static-top FooterWrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer__widget footer__menu">
                    <div className="ft__logo">
                      <a href="index.html">
                        <img className="ft__logo__img" src="/static/assets/images/logo/logo.jpg" alt="logo" />
                      </a>
                      <p>AYA Chinese จีนครบ จบที่เดียว - รับสอนภาษาจีนทุกระดับตั้งแต่พื้นฐาน ให้คำปรึกษาและข้อมูลในการศึกษาต่อประเทศจีน รับติดต่อสถาบัน จัดหาที่เรียน ดำเนินการสมัตรเรียนในทุกระดับ</p>
                    </div>
                    <div className="footer__content">
                      <ul className="social__net social__net--2 d-flex justify-content-center">
                        <li>
                          <Link href="https://www.facebook.com/AYA.TeachingChinese/">
                            <a target="_blank"><i className="bi bi-facebook" /></a>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.facebook.com/AYA.TeachingChinese/">
                            <a target="_blank"><i className="bi bi-twitter" /></a>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.youtube.com/channel/UCVky4PrbWWDyC4hrYwVN64w">
                            <a target="_blank"><i className="bi bi-youtube" /></a>
                          </Link>
                        </li>
                      </ul>
                      {/* <ul className="mainmenu d-flex justify-content-center">
                        <li><a href="index.html">Trending</a></li>
                        <li><a href="index.html">Best Seller</a></li>
                        <li><a href="index.html">All Product</a></li>
                        <li><a href="index.html">Wishlist</a></li>
                        <li><a href="index.html">Blog</a></li>
                        <li><a href="index.html">Contact</a></li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright__wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="copyright">
                    <div className="copy__right__inner text-center">
                      <p>Copyright <i className="fa fa-copyright" /> <a href="#">AYA Chinese.</a> All Rights Reserved</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="payment text-right">
                    {/* <img src="/static/assets/images/icons/payment.png" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* //Footer Area */}

      </div>
    )
  }
}