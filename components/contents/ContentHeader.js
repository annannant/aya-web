import { Component, Fragment } from 'react'
import { imageUrl } from '../../src/utils/url';
import css from './content.scss';

export default class ContentHeader extends Component {
  render() {
    let { data } = this.props;
    data.header = (data.header || {});
    if (!data.header.image_url) {
      return <div className="pb--10 mb--0" />;
      //  className={`${style.no__header}`} />;
    }

    return (
      <div className="ht__bradcaump__area mb--40" style={{ backgroundImage: `url(\'${imageUrl(data.header.image_url)}\')` }}>
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

