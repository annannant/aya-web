import { Component, Fragment } from 'react'
import ContactHeader from './ContactHeader';

export default class ContactPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Fragment>
        {/* <ContactHeader data={{}} /> */}
        {/* <section className="wn_contact_area bg--white pt--80 pb--80"> */}
        <section className="wn_contact_area bg--white pt--40 pb--80">
          <div className="container">
            <div className="row" style={{ borderTop: '1px solid #868e96', paddingTop: '2.5em' }}>
              <div className="col-lg-8 col-12">
                <div className="contact-form-wrap">
                  <h2 className="contact__title">แผนที่</h2>
                  <div className="google__map">
                    <img src="/static/assets/images/about/aya-map.png" width="100%" />
                  </div>
                </div>
                <div className="form-output">
                  <p className="form-messege">
                  </p></div>
              </div>
              <div className="col-lg-4 col-12 md-mt-40 sm-mt-40">
                <div className="wn__address">
                  <h2 className="contact__title">เกี่ยวกับเรา</h2>
                  <p>
                    สถาบันสอนภาษา AYA Chinese
                    รับสอนภาษาจี
                    บัน จัดหาที่เรียน ดำเนินการสมัตรเรียนในทุกระดับ
                  </p>
                  <div className="wn__addres__wreapper">
                    <div className="single__address">
                      <i className="icon-location-pin icons" />
                      <div className="content">
                        <span>address:</span>
                        <p>สถาบันสอนภาษา AYA Chinese ชั้น 16 อาคาร พญาไทพลาซ่า ติด BTS และ Airport Link พญาไท ทางออกที่ 1</p>
                      </div>
                    </div>
                    <div className="single__address">
                      <i className="icon-phone icons" />
                      <div className="content">
                        <span>Phone Number:</span>
                        <p>02 - 102 3593</p>
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