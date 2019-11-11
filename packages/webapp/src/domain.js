import { KyFetcher, Config, createDomain, LocalStorage } from '@bger/domain';

const config = new Config({
  fetcher: new KyFetcher(),
  serverUrl: process.env.REACT_APP_SERVER_URL,
  storage: new LocalStorage(window),
});

export default createDomain({ config });
