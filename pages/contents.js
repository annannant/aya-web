import { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { withRouter } from 'next/router'

import Link from 'next/link'

import Layout from 'components/layouts/DefaultLayout';
import ContentDetail from 'components/contents/ContentDetail';
import Error404 from 'components/errors/Error404';

class Contents extends Component {
  componentWillMount() {
    const vid = this.props.router.query.v;
    if (vid) {
      this.props.content.getContentByViewId(vid);
    }
  }

  render() {
    const router = this.props.router;

    console.log('----> this.props', this.props);
    // const content = this.props.content.toJS();
    // const data = content.data;
    // const loading = content.loading;
    if (!router.query.v) {
      return (
        <Layout>
          <Error404 />
        </Layout>
      )
    }

    // if (!loading && !data.contents) {
    //   return <Error404 />
    // }

    return (
      <Layout>
        <ContentDetail content={this.props.content} router={router} />
      </Layout>
    )
  }
}

export default inject('content')(withRouter(observer(Contents)));