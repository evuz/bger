import { inject } from 'depsin';

import { LoginRepository, LoginWithProvider, LoginWithMail } from './LoginRepository';
import { ConfigSymbols } from '../../Config/ConfigSymbols';
import { Config } from '../../Config/Config';

export class BiwengerLoginRepository implements LoginRepository {
  private get authProvider() {
    return this.config.get('authProvider');
  }

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

  loginWithProvider({ provider }: LoginWithProvider) {
    return this.authProvider.login(provider);
  }
}
