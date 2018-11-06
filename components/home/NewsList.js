import { Component, Fragment } from 'react'
import Link from 'next/link';

import style from './NewsList.scss';
import Title from './Title';
import { imageUrl } from '../../src/utils/url';

export default class NewsList extends Component {
  constructor() {
    super();
  }

  render() {
    let { data } = this.props;
    let contents = (data.items || []).map((item, index) => {
      return (
        <div key={index} className={`col-md-4 col-sm-12 ${style.item__box}`}>
          <div className="product product__style--3">
            <div className="product__thumb">
              <Link href="/">
                <a className="first__img"><img src={`${imageUrl(item.image_url)}`} alt={item.title} /></a>
              </Link>
              <Link href="/">
                <a className="second__img animation1"><img src={`${imageUrl(item.image_url)}`} alt={item.title} /></a>
              </Link>
              <div className={`${style.title__box}`}>{item.title}</div>
              <div className="prize position__right__bottom d-flex">
                <Link href="/">
                  <a><strong>{item.link_title}</strong></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    });

    return (
      <Fragment>
        <section className="wn__product__area brown--color bg--white mt--40 pb--80">
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