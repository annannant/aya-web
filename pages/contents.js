import { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { withRouter } from 'next/router'

import Link from 'next/link'

import ContentLayout from '../components/layouts/ContentLayout';
import ContentDetail from 'components/contents/ContentDetail';
import Error404 from 'components/errors/Error404';
import DefaultLayout from '../components/layouts/DefaultLayout';

class Contents extends Component {
  componentWillMount() {
    let { v, preview } = this.props.router.query;
    preview = (preview === 'aya_admin!');
    if (v) {
      this.props.content.getContentByViewId(v, preview);
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
        <DefaultLayout>
          <Error404 />
        </DefaultLayout>
      )
    }

    // if (!loading && !data.contents) {
    //   return <Error404 />
    // }

    return (
      <DefaultLayout>
        <ContentDetail content={this.props.content} router={router} />
      </DefaultLayout>
    )
  }
}

export default inject('content')(withRouter(observer(Contents)));