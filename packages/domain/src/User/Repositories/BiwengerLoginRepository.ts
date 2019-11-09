import { inject } from 'depsin';

import { LoginRepository, LoginWithMail } from './LoginRepository';
import { ConfigSymbols } from '../../Config/ConfigSymbols';
import { Config } from '../../Config/Config';

export class BiwengerLoginRepository implements LoginRepository {
  private get fetcher() {
    return this.config.get('fetcher');
  }

  private get serverUrl() {
    return this.config.get('serverUrl');
  }

  constructor(@inject(ConfigSymbols.Config) private config: Config) {}

  loginWithMail({ email, password }: LoginWithMail) {
    return this.fetcher.post(`${this.serverUrl}/auth/login`, { password, email });
  }

  loginWithProvider() {
    throw Error('BiwengerLoginRepository#loginWithProvider is not implemented');
  }
}
