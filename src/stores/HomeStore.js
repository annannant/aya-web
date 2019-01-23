import BaseStore from './BaseStore'
import _ from 'lodash'
import { http } from '../utils/http';
import { config } from '../config';

class HomeStore extends BaseStore {
  constructor() {
    super();
    this.observable({
      loading: false,
      data: [],
      list: [],
      selected: 0,
    });
  }

  async resetData() {
    this.data = [];
  }

  async getData(key) {
    try {
      this.loading = true;
      let url = `${config.api.cms}/v1/layouts?key=${key}`;
      let response = await http.get(url);
      if (response.statusCode === 200) {
        let data = response.body.data || [];
        // delete data.data;
        this.data = data;
      } else {
        this.data = [];
      }
    } catch (err) {
      console.error('err', err);
    } finally {
      this.loading = false;
    }
  }
}
export default new HomeStore();

