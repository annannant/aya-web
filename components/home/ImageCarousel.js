import { Component, Fragment } from 'react';
import { Carousel } from 'react-responsive-carousel';
import NextHead from 'next/head'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from './ImageCarousel.scss';
import Title from './Title';
import { imageUrl } from '../../src/utils/url';

export default class ImageCarousel extends Component {
  constructor() {
    super();
  }

  render() {
    let { data } = this.props;
    let images = (data.items || []).map((item, index) => {
      return (
        <div key={index}>
          <img src={imageUrl(item.image_url)} />
        </div>
      );
    });
    return (
      <Fragment>
        <NextHead>
          <link rel="stylesheet" href="/static/assets/css/plugins/carousel.min.css" />
        </NextHead>
        <section className="wn__product__area brown--color bg--white mt--40 pb--80">
          <Title data={data} /> 
          <div className={`container ${style.wrapper}`}>
            <div className="row">
              <div className="col-lg-12">
                <Carousel showArrows showStatus={false} showThumbs={false} autoPlay stopOnHover>
                  {images}
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}