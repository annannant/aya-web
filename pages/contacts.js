import { Component } from 'react'
import { observer, inject } from 'mobx-react';

import DefaultLayout from 'components/layouts/DefaultLayout';
import ContentList from 'components/home/ContentList';
import ContactPage from '../components/contacts/ContactPage';

class Contacts extends Component {
  componentDidMount() {
    // this.props.home.resetData();
    // this.props.home.getData(process.env.REVIEW_ID);
  }

  render() {
    let home = this.props.home.toJS().data;
    return (
      <div>
        <DefaultLayout>
          <ContactPage />
        </DefaultLayout>
      </div>
    )
  }
}

export default inject('home')(observer(Contacts));
