import { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { withRouter } from 'next/router'

import Link from 'next/link'

import ContentLayout from '../components/layouts/ContentLayout';
import ContentDetail from 'components/contents/ContentDetail';
import Error404 from 'components/errors/Error404';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Loader from '../components/commons/Loader';
import ContentNotFound from '../components/contents/ContentNotFound';

class Contents extends Component {
  componentDidMount() {
    this.getContent();
  }

  componentWillReceiveProps() {
    this.getContent();
  }

  async getContent() {
    let { v, preview } = this.props.router.query;
    preview = (preview === 'aya_admin!');
    if (v) {
      await this.props.content.getContentByViewId(v, preview);
    }
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