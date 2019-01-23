import BaseStore from './BaseStore'
import _ from 'lodash'
import { http } from '../utils/http';
import { config } from '../config';

const defaultData = {
  header: {
    title: '',
    image_url: '',
  },
};

class ContentStore extends BaseStore {
  constructor() {
    super();
    this.observable({
      loading: false,
      data: _.cloneDeep(defaultData),
      list: [],
      selected: 0,
    });
  }

  async getContentByViewId(vid, preview) {
    try {
      this.loading = true;
      let query = (preview) ? '' : 'active=true';
      let url = `${config.api.cms}/v1/contents/vid/${vid}?${query}`;
      let response = await http.get(url);
      if (response.statusCode === 200 && response.body.data) {
        let data = response.body.data;
        delete data._id;
        this.data = data;
      } else {
        this.data = _.cloneDeep(defaultData);
      }
    } catch (err) {
      this.data = _.cloneDeep(defaultData);
      console.error(err);
    } finally {
      this.loading = false;
    }
  }
}

export default new ContentStore();

