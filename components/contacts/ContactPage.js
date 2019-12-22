import { Component, Fragment } from 'react'
import ContactHeader from './ContactHeader';
import Link from 'next/link';

export default class ContactPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        {/* <ContactHeader data={{}} /> */}
        {/* <section className="wn_contact_area bg--white pt--80 pb--80"> */}
        <section className="wn_contact_area bg--white pb--100">
          <div className="container">
            <div className="row" style={{ borderTop: '1px solid #ddd', paddingTop: '2.8em' }}>
              <div className="col-lg-8 col-12">
                <div className="contact-form-wrap">
                  <h2 className="contact__title">แผนที่</h2>
                  <div className="google__map">
                    <img alt="แผนที่ ayachinese" src="/static/assets/images/about/แผนที่-ayachinese2.jpg" width="100%" />
                  </div>
                </div>
                <div className="form-output">
                  <p className="form-messege">
                  </p></div>
              </div>
              <div className="col-lg-4 col-12 md-mt-40 sm-mt-40">
                <div className="wn__address">
                  <h2 className="contact__title">AYA CHINESE., LTD.</h2>
                  {/* <p>
                    บริษัท อายะ ไชนีส
                    รับสอนภาษาจีน จัดหาที่เรียน ดำเนินการสมัครเรียนในทุกระดับ
                  </p> */}
                  <div className="wn__addres__wreapper">
                    <div className="single__address">
                      <i className="icon-location-pin icons" />
                      <div className="content">
                        <span>address:</span>
                        <p>สถาบันสอนภาษาอายะไชนีส AYACHINESE CO., LTD. <br /> ตึก CP Tower 3 (พญาไท) อาคาร A ห้อง 10-1-1 ชั้น10 <br />แขวงทุ่งพญาไท เขตราชเทวี กทม.10400</p>
                      </div>
                    </div>
                    <div className="single__address">
                      <i className="icon-phone icons" />
                      <div className="content">
                        <span>Phone Number:</span>
                        <p>
                          <Link href="tel://+6621023593">02-102-3593</Link>
                          <br/>
                          <Link href="tel://+66653264945">065-326-4945</Link>
                        </p>
                      </div>
                    </div>
                    <div className="single__address">
                      <i className="icon-envelope icons" />
                      <div className="content">
                        <span>Email address:</span>
                        <p>ayachinese@gmail.com</p>
                      </div>
                    </div>
                    <div className="single__address">
                      <i className="icon-globe icons" />
                      <div className="content">
                        <span>website address:</span>
                        <p>http://www.ayachinese.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}