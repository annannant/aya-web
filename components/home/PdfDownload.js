import { Component, Fragment } from 'react'
import renderHTML from 'react-render-html';
import YouTube from 'react-youtube';
import NextHead from 'next/head'
import ReactHtmlParser from 'react-html-parser';

import Title from './Title';
import { fileUrl } from '../../src/utils/url';

export default class PdfDownload extends Component {
  constructor() {
    super();
  }

  render() {
    let { data } = this.props;
    let downloads = (data.items || []).map((item, index) => {
      return (
        <div key={index} className="col-md-2 col-6 text-center">
          <a href={fileUrl(item.file_url)} target="_blank" className="pdf-icon">
            <img src="/static/assets/images/pdf.png" width="100%" />
          </a>
          <div className="mt--20"><strong>{item.title}</strong></div>
          <div className="mt--10">{item.desc}</div>
        </div>
      );
    });

    return (
      <Fragment>
        <section className="wn__product__area brown--color pb--60 pt--60"
          style={{ backgroundColor: (data.bg_color) ? data.bg_color : 'inherit' }} >
          <Title data={data} />
          <div className="container pdf-content">
            <div className="row">
              {downloads}
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}