import { Component } from 'react'
import { observer, inject } from 'mobx-react';

import ContentList from '../components/home/ContentList';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Loader from '../components/commons/Loader';

class Index extends Component {
  componentDidMount() {
    this.props.home.resetData();
    this.props.home.getData('home');
  }

  render() {
    let { data, loading } = this.props.home.toJS();
    const main = data.main ? data.main : {};
    return (
      <DefaultLayout onTop={main.ontop}>
        <Loader loading={loading} />
        <ContentList list={data.contents} />
      </DefaultLayout>
    )
  }
}

export default inject('home')(observer(Index));
