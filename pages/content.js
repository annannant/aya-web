import { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { withRouter } from 'next/router'

import Link from 'next/link'

import Layout from 'components/layout/DefaultLayout';
import ContentDetail from 'components/content/ContentDetail';
import Error404 from 'components/error/Error404';

class Content extends Component {
  componentWillMount() {
    const vid = this.props.router.query.v;
    if (vid) {
      this.props.content.getContentByViewId(vid);
    }
  }

  render() {
    const { content, router } = this.props;
    return (
      <div>
        <Layout>
          <ContentDetail content={content} router={router} />
        </Layout>
      </div>
    )
  }
}

export default inject('content')(withRouter(observer(Content)));