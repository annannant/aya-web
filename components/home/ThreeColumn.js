import { Component, Fragment } from 'react'
import Link from 'next/link'
import Title from './Title';
import { imageUrl } from '../../src/utils/url';
import LinkType from './LinkType';

export default class ThreeColumn extends Component {
  constructor() {
    super();
  }

  render() {
    let { data } = this.props;
    let contents = (data.items || []).map((item, index) => {
      return (
        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12 gallery__item cat--1">
          <div className="portfolio">
            <div className="thumb">
              <img src={imageUrl(item.thumb_url)} alt={item.title} />
              {item.image_url &&
                <div className="search">
                  <a href={imageUrl(item.image_url)} data-lightbox="grportimg" data-title={item.title}><i className="zmdi zmdi-search" /></a>
                </div>
              }
            </div>
            <div className="content">
              <h6>
                <LinkType type={item.link_type.value} to={item.link_to} >
                  {item.title}
                </LinkType>
              </h6>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <section className="wn__portfolio__area gallery__masonry__activation bg--white mt--40 mb--180">
          <Title data={data} />
          <div className="container">
            <div className="row masonry__wrap">
              {contents}
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}