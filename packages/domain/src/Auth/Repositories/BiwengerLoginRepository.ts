import { inject } from 'depsin';

import { AuthRepository, LoginWithMail } from './AuthRepository';
import { ConfigSymbols } from '../../Config/ConfigSymbols';
import { Config } from '../../Config/Config';

export class BiwengerLoginRepository implements AuthRepository {
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
