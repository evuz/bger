import { KyFetcher, createDomain, LocalStorage } from '@bger/domain';
console.log(process.env);
const config = {
  serverUrl: process.env.REACT_APP_SERVER_URL,
};

const adapters = {
  fetcher: new KyFetcher(),
  storage: new LocalStorage(window),
}

export default createDomain({ config, adapters });
