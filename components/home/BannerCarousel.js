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
      autoplay: true,
      autoplayTimeout: 3000,
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
    if (data.items.length < 1) return <div />;
    return (
      <Fragment>
        <Desktop contents={data.items} />
        <Mobile contents={data.items} {...this.props} />
      </Fragment>
    )
  }
}


class Desktop extends Component {
  render() {
    let contents = (this.props.contents || []).map((item, index) => {
      return (
        <div key={index} className="slide animation__style08 bg-image--7 fullscreen align__center--left"
          style={{ backgroundImage: `url(\'${imageUrl(item.image_url)}\')`, backgroundColor: '#ffffff' }} >
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

    return (
      <div className="slider-area brown__nav slider--15 slide__activation slide__arrow01 owl-carousel owl-theme d-none d-lg-block">
        {contents}
      </div>
    );
  }
}

class Mobile extends Component {
  render() {
    let contents = (this.props.contents || []).map((item, index) => {
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
        <section className="wn__product__area brown--color bg--white pb--0 pt--0 d-block d-lg-none">
          <div className={`container`}>
            <div className="row">
              <div className="offset-lg-2 col-lg-8 nopadding">
                {contents.length > 0 &&
                  <ImageCarousel showArrows showStatus={false} showThumbs={false} autoPlay stopOnHover>
                    {contents}
                  </ImageCarousel>
                }
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}