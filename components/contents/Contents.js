import { Component, Fragment } from 'react'
import renderHTML from 'react-render-html';
import YouTube from 'react-youtube';
import NextHead from 'next/head';
import ThreeColumn from '../home/ThreeColumn';
import FreeText from '../home/FreeText';

export default class Contents extends Component {
  constructor() {
    super();
  }

  render() {
    let { data } = this.props;
    let contents = (data.contents || []).map((item, index) => {
      let content;
      switch (item.type) {
        case 'free-text':
          content = (<FreeText key={index} data={item.data} />);
          break;
        case 'three-column':
          content = <ThreeColumn key={index} data={item.data}/>
          break;

        default:
          content = (
            <div className={`col-lg-12 col-sm-12 ql-container ql-snow nopadding`}>
              <div className="ql-editor nopadding">
                {renderHTML(item.text)}
              </div>
            </div>
          )
          break;
      }
      return (
        <Fragment key={index}>
          {content}
        </Fragment>
      );
    });

    return (
      <Fragment>
        <NextHead>
          <link rel="stylesheet" href="/static/assets/css/plugins/quill.snow.css" />
        </NextHead>
        <section className="wn__product__area brown--color  pb--30">
          <div className="container">
            <div className="row">
              <div className={`col-md-12 col-sm-12 nopadding`}>
                {contents}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}