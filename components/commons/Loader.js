import { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link'
import css from './Loader.scss';

export default class Loader extends Component {
  render() {
    return (
      <Fragment>
        {this.props.loading === true &&
          < div className={css.load__wrapper} >
            <div className={css.load__item}>
              <div className={css.lds_circle}><div></div></div>
              <div>Loading...</div>
            </div>
          </div >
        }
      </Fragment>
    )
  }
}