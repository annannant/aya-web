import BaseStore from './BaseStore'
import _ from 'lodash'
import { http } from '../utils/http';

const homeId = '5b9dec47c3960686838d8162';

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

  async getHomeContent() {
    let url = `${process.env.CMS_API_URL}/v1/layouts/${homeId}`;
    let response = await http.get(url);
    if (response.statusCode === 200) {
      let data = response.body.data;
      delete data.data;
      this.data = data;
    } else {
      this.data = [];
    }
  }
}
export default new HomeStore();

