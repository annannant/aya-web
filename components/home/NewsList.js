import { Component, Fragment } from 'react'
import Link from 'next/link';

import style from './NewsList.scss';
import Title from './Title';
import { imageUrl } from '../../src/utils/url';
import LinkType from './LinkType';

export default class NewsList extends Component {
  constructor() {
    super();
  }

  render() {
    let { data } = this.props;
    let colRows;
    switch (data.rows) {
      case 2:
        colRows = 'col-lg-6 col-md-6 col-sm-6 col-6';
        break;
      case 3:
        colRows = 'col-lg-4 col-md-6 col-sm-6 col-12';
        break;
      case 4:
        colRows = 'col-lg-3 col-md-4 col-sm-6 col-12';
        break;
      case 6:
        colRows = 'col-lg-2 col-md-2 col-sm-6 col-12';
        break;
      default:
        colRows = 'col-lg-4 col-md-6 col-sm-6 col-12';  
        break;
    }

    let contents = (data.items || []).map((item, index) => {
      return (
        <div key={index} className={`${colRows} ${style.item__box}`}>
          <div className="product product__style--3">
            <div className="product__thumb">
              <LinkType type={item.link_type.value} to={item.link_to}>
                <img src={`${imageUrl(item.image_url)}`} alt={item.title} />
              </LinkType>
              {item.title &&
                <div className={`${style.title__box}`}>{item.title}</div>
              }
              {item.link_title &&
                <div className={`position__right__bottom d-flex ${style.title}`}>
                  <LinkType type={item.link_type.value} to={item.link_to}>
                    <strong>{item.link_title}</strong>
                  </LinkType>
                </div>
              }
            </div>
          </div>
        </div>
      )
    });

    return (
      <Fragment>
        <section className="wn__product__area brown--color bg--white pb--60 pt--60"
          style={{ backgroundColor: (data.bg_color) ? data.bg_color : 'inherit' }} >
          <Title data={data} />
          <div className="container">
            <div className="border--round row">
              {contents}
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}