import { Component } from 'react'
import { withRouter } from 'next/router'

import Link from 'next/link'

import Layout from 'components/layout/DefaultLayout';
import ContentDetail from 'components/content/ContentDetail';
import Error404 from 'components/error/Error404';

export default withRouter(class Index extends Component {
  constructor() {
    super();
  }

  render() {
    const { router } = this.props;
    console.log('----> router', router.query.id);
    // if (!this.props.url.query.id) {
    //   return <Error404 />
    // }
    return (
      <div>
        <Layout>
          <ContentDetail />
        </Layout>
      </div>
    )
  }
});