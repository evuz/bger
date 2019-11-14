import { inject } from 'depsin';

import { AuthRepository, LoginWithMail } from './AuthRepository';
import { ConfigSymbols } from '../../Config/ConfigSymbols';
import { Config } from '../../Config/Config';
import { ConfigValues, ConfigAdapters } from '../../Config/ConfigTypes';

export class BiwengerAuthRepository implements AuthRepository {
  private get fetcher() {
    return this.adapters.get('fetcher');
  }

  private get serverUrl() {
    return this.config.get('serverUrl');
  }

  private get storage() {
    return this.adapters.get('storage');
  }

  constructor(
    @inject(ConfigSymbols.Config) private config: ConfigValues,
    @inject(ConfigSymbols.Adapters) private adapters: ConfigAdapters,
  ) {}

  loginWithMail({ email, password }: LoginWithMail) {
    return this.fetcher.post(`${this.serverUrl}/auth/login`, { password, email }).then(res => {
      return this.storage.set('token', res.token).then(() => res);
    });
  }

  loginWithProvider(): any {
    throw Error('BiwengerLoginRepository#loginWithProvider is not implemented');
  }
}
