import { inject } from 'depsin';

import { LoginRepository, LoginWithProvider } from './LoginRepository';
import { ConfigSymbols } from '../../Config/ConfigSymbols';
import { Config } from '../../Config/Config';

export class FirebaseLoginRepository implements LoginRepository {
  private get authProvider() {
    return this.config.get('authProvider');
  }
  constructor(@inject(ConfigSymbols.Config) private config: Config) {}

  loginWithUsername() {
    throw Error('loginWithUsername is not implemented in FirebaseLoginRepository');
  }

  loginWithProvider({ provider }: LoginWithProvider) {
    return this.authProvider.login(provider);
  }
}
