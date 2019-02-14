import ReactGA from 'react-ga';
import { config } from '../config';

export class GoogleAnalytic {
  constructor() {
    if (['production', 'development'].includes(process.env.NODE_ENV)) {
      ReactGA.initialize(config.google.analytics);
      this.googleAnalytic = ReactGA;
    } else {
      this.googleAnalytic = {
        pageview: () => { },
        event: () => { },
      };
    }
  }

  view(name = undefined) {
    let path = window.location.pathname;
    if (name) {
      path = `${path}${name}`;
    }
    this.googleAnalytic.pageview(path);
  }

  // display(page) {
  //   if (page === undefined) {
  //     page = window.location.pathname;
  //   }
  //   this.googleAnalytic.ga('send', 'pageview', page);
  // }

  // action(category, action, label) {
  //   this.googleAnalytic.event({
  //     category: category,
  //     action: action,
  //     label: label,
  //     nonInteraction: true,
  //   });
  // }
}

export const ga = new GoogleAnalytic();
export default ga;
