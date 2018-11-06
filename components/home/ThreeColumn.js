import { Component, Fragment } from 'react'
import Title from './Title';
import { imageUrl } from '../../src/utils/url';

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
              <a href="portfolio-details.html">
                <img src={imageUrl(item.thumb_url)} alt="portfolio images" />
              </a>
              {item.image_url &&
                <div className="search">
                  <a href={imageUrl(item.image_url)} data-lightbox="grportimg" data-title={item.title}><i className="zmdi zmdi-search" /></a>
                </div>
              }
            </div>
            <div className="content">
              <h6><a href="portfolio-details.html">{item.title}</a></h6>
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