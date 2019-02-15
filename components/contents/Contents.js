import { Component, Fragment } from 'react'
import renderHTML from 'react-render-html';
import YouTube from 'react-youtube';
import NextHead from 'next/head';
import ThreeColumn from '../home/ThreeColumn';
import FreeText from '../home/FreeText';
import PdfDownload from '../home/PdfDownload';

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
        case 'pdf-download':
        content = <PdfDownload key={index} data={item.data}/>
        default:
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
        {contents}
      </Fragment>
    )
  }
}