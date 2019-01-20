import { Component } from 'react'
import { observer, inject } from 'mobx-react';

import ContactPage from '../components/contacts/ContactPage';
import DefaultLayout from '../components/layouts/DefaultLayout';

class Contacts extends Component {
  componentDidMount() {
    // this.props.home.resetData();
    // this.props.home.getData(process.env.REVIEW_ID);
  }

  render() {
    let home = this.props.home.toJS();
    return (
      <DefaultLayout>
        <ContactPage />
      </DefaultLayout>
    )
  }
}

export default inject('home')(observer(Contacts));
