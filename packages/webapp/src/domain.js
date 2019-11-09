import { KyFetcher, Config, createDomain } from '@bger/domain';

const config = new Config({
  fetcher: new KyFetcher(),
  serverUrl: process.env.REACT_APP_SERVER_URL
});

export default createDomain({ config });
