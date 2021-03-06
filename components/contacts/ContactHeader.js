import { Component, Fragment } from 'react'
import { imageUrl } from '../../src/utils/url';
import style from './contact.scss';

export default class ContactHeader extends Component {
  render() {
    let { data } = this.props;
    data.header = (data.header || {});
    // if (!data.header.image_url) {
    //   return <div className={`${style.no__header}`} />;
    // }

    return (
      <div className="ht__bradcaump__area bg-image--6"
        style={{ position: 'relative' }}
      // style={{ backgroundImage: `url(\'/static/assets/images/bg/6.jpg\')` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bradcaump__inner text-center">
                <h2 className="bradcaump-title">{data.header.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

