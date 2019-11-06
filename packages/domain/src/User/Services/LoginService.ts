import { inject } from 'depsin';

import { Service } from '../../Domain/models/Service';
import { LoginWithProvider, LoginWithUsername, LoginRepository } from '../Repositories/LoginRepository';
import { UserSymbols } from '../UserSymbols';

export class LoginService implements Service {
  constructor(@inject(UserSymbols.Repositories.Login) private repository: LoginRepository) {}

  execute(params: LoginWithProvider | LoginWithUsername) {
    if ((<LoginWithProvider>params).provider) {
      return this.repository.loginWithProvider(<LoginWithProvider>params);
    }
    return this.repository.loginWithUsername(<LoginWithUsername>params);
  }
}
