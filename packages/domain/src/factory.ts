import { DepInjection } from 'depsin';

import { KyFetcher } from './Adapters/Fetcher/KyFetcher';
import { ConfigSymbols } from './Config/ConfigSymbols';
import { Config } from './Config/Config';
import { Domain } from './Domain/domain'

export function createDomain({ config: conf }) {
  const config = new Config({
    fetcher: new KyFetcher(conf.server_url),
  });
  const container = new DepInjection({}, { [ConfigSymbols.Config]: config });

  return new Domain({
    useCases: {},
    config: <Config>container.get(ConfigSymbols.Config),
  });
}
