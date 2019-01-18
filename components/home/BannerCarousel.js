import { Component, Fragment } from 'react'
import NextHead from 'next/head'
import Carousel from 'react-image-carousel';
import { Carousel as ImageCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import $ from 'jquery';
import { imageUrl } from '../../src/utils/url';

export default class BannerCarousel extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    $('.slide__activation').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      autoplay: false,
      autoplayTimeout: 10000,
      items: 1,
      navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
      dots: false,
      lazyLoad: true,
      responsive: {
        0: {
          items: 1
        },
        1920: {
          items: 1
        }
      }
    });
  }

  render() {
    let { data } = this.props;
    let contents = (data.items || []).map((item, index) => {
      return (
        <div key={index} className="slide animation__style08 bg-image--7 fullscreen align__center--left"
          style={{ backgroundImage: `url(\'${imageUrl(item.image_url)}\')` }} >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="slider__content">
                  <div className="contentbox">
                    <h2>{item.text1}<span>{item.text1_color}</span></h2>
                    <h2>{item.text2}<span>{item.text2_color}</span></h2>
                    <h2>{item.text3}<span>{item.text3_color}</span></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    });
    let mContents = (data.items || []).map((item, index) => {
      return (
        <div key={index}>
          <img src={imageUrl(item.image_url)} />
        </div>
      );
    });

    return (
      <Fragment>
        <Desktop contents={contents} />
        <Mobile contents={mContents} {...this.props} />
      </Fragment>
    )
  }
}


class Desktop extends Component {
  render() {
    return (
      <div className="slider-area brown__nav slider--15 slide__activation slide__arrow01 owl-carousel owl-theme d-none d-lg-block">
        {this.props.contents}
      </div>
    );
  }
}

class Mobile extends Component {
  render() {
    return (
      <Fragment>
        <NextHead>
          <link rel="stylesheet" href="/static/assets/css/plugins/carousel.min.css" />
        </NextHead>
        <section className="wn__product__area brown--color bg--white pb--0 pt--0 d-block d-lg-none">
          <div className={`container`}>
            <div className="row">
              <div className="offset-lg-2 col-lg-8 nopadding">
                <ImageCarousel showArrows showStatus={false} showThumbs={false} autoPlay stopOnHover>
                  {this.props.contents}
                </ImageCarousel>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}