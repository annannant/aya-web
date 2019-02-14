import { Component } from 'react'
import { observer, inject } from 'mobx-react';
import NextHead from 'next/head'

import ContentList from '../components/home/ContentList';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Loader from '../components/commons/Loader';
import ga from '../src/utils/ga';

class Universities extends Component {
  componentDidMount() {
    this.props.home.resetData();
    this.props.home.getData('universities');
    ga.view();
  }

  render() {
    let { data, loading } = this.props.home.toJS();
    const main = data.main ? data.main : {};
    return (
      <DefaultLayout onTop={main.ontop}>
        <NextHead>
          <title>หลักสูตรเรียนต่อต่างประเทศ | AYA Chinese</title>
        </NextHead>
        <Loader loading={loading} />
        <ContentList list={data.contents} />
      </DefaultLayout>
    )
  }
}

export default inject('home')(observer(Universities));
