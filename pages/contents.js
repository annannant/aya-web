import { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { withRouter } from 'next/router'

import Link from 'next/link'
import { Helmet } from "react-helmet";
import NextHead from 'next/head'

import ContentLayout from '../components/layouts/ContentLayout';
import ContentDetail from 'components/contents/ContentDetail';
import Error404 from 'components/errors/Error404';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Loader from '../components/commons/Loader';
import ContentNotFound from '../components/contents/ContentNotFound';
import ga from '../src/utils/ga';

class Contents extends Component {
  componentDidMount() {
    this.getContent();
  }

  componentWillReceiveProps() {
    this.getContent();
  }

  async getContent() {
    setTimeout(async () => {
      let { v, preview } = this.props.router.query;
      let vid = v;
      preview = (preview === 'aya_admin!');
      if (vid) {
        await this.props.content.getContentByViewId(vid, preview);
        const { data } = this.props.content.toJS();
        ga.view(`/${data.header.title}`);
      }
    }, 100);
  }

  render() {
    const router = this.props.router;
    const content = this.props.content.toJS();
    const { data, loading } = content;
    if (!router.query.v) {
      return (
        <DefaultLayout>
          <Error404 />
        </DefaultLayout>
      )
    }

    const ontop = !data.header.image_url ? true : false;
    return (
      <DefaultLayout onTop={ontop}>
        <NextHead>
          <title>{data.title || 'เรียนภาษาจีนกับเหล่าซืออายะ'} | AYA Chinese</title>
        </NextHead>
        <Loader loading={loading} />
        {!loading && data.contents
          ? <ContentDetail />
          : <div />
        }
      </DefaultLayout>
    )
  }
}

export default inject('content')(withRouter(observer(Contents)));