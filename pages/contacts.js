import { Component } from 'react'
import { observer, inject } from 'mobx-react';
import NextHead from 'next/head'

import ContactPage from '../components/contacts/ContactPage';
import DefaultLayout from '../components/layouts/DefaultLayout';
import ga from '../src/utils/ga';
import Head from '../components/layouts/Head';

class Contacts extends Component {
  componentDidMount() {
    ga.view();
    // this.props.home.resetData();
    // this.props.home.getData(process.env.REVIEW_ID);
  }

  render() {
    return (
      <DefaultLayout onTop={true}>
        <NextHead>
          <title>Contact AYA CHINESE., LTD. | AYA Chinese</title>
        </NextHead>
        <ContactPage />
      </DefaultLayout>
    )
  }
}

export default inject('home')(observer(Contacts));
