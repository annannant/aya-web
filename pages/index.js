import { Component } from 'react'
import { observer, inject } from 'mobx-react';

import DefaultLayout from 'components/layout/DefaultLayout';
import ContentList from 'components/home/ContentList';

class Index extends Component {
  componentDidMount() {
    this.props.home.getHomeContent();
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

export default inject('home')(observer(Index));
