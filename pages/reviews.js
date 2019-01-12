import { Component } from 'react'
import { observer, inject } from 'mobx-react';

import DefaultLayout from 'components/layouts/DefaultLayout';
import ContentList from 'components/home/ContentList';

class Reviews extends Component {
  componentDidMount() {
    this.props.home.resetData();
    this.props.home.getData(process.env.REVIEW_ID);
  }

  render() {
    let home = this.props.home.toJS().data;
    return (
      <div>
        <DefaultLayout>
          <ContentList list={home.contents} />
        </DefaultLayout>
      </div>
    )
  }
}

export default inject('home')(observer(Reviews));
