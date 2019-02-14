import { Component, Fragment } from 'react'

import Head from './Head';
import Footer from './Footer';
import Header from './Header';

import './styles/Index.scss';
import './styles/Plugins.scss';
import './DefaultLayout.scss';

class DefaultLayout extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    require('static/assets/js/vendor/modernizr-3.5.0.min.js');
    if (typeof window !== undefined) {
      require('node_modules/owl.carousel/dist/owl.carousel.min.js');
      require('static/assets/js/vendor/jquery-3.2.1.min.js');
      require('static/assets/js/pooper.js');
      require('static/assets/js/plugins.js');
      require('static/assets/js/active.js');
    };
  }

  render() {
    return (
      <Fragment>
        <Head 
          // title={`${this.props.title || "เรียนภาษาจีนกับเหล่าซืออายะ"} | AYA Chinese`}
          title={`เรียนภาษาจีนกับเหล่าซืออายะ | AYA Chinese`}
          author="AYA Chinese"
        />
        <div className="wrapper" id="wrapper">
          <Header {...this.props} />
          {this.props.children}
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default DefaultLayout;