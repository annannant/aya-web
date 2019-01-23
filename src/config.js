import localhost from './config/config.localhost';
import production from './config/config.production';

const setupConfig = (env) => {
  switch (env) {
    case 'production':
      return production;
    default:
      return localhost;
  }
};

export const config = setupConfig(process.env.NODE_ENV);
