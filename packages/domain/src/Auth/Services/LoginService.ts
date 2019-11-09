import { inject } from 'depsin';

import { Service } from '../../Domain/models/Service';
import { LoginWithProvider, LoginWithMail, AuthRepository } from '../Repositories/AuthRepository';
import { AuthSymbols } from '../AuthSymbols';

export class LoginService implements Service {
  constructor(@inject(AuthSymbols.Repositories.Auth) private repository: AuthRepository) {}

  execute(params: LoginWithProvider | LoginWithMail) {
    if ((<LoginWithProvider>params).provider) {
      return this.repository.loginWithProvider(<LoginWithProvider>params);
    }
    return this.repository.loginWithMail(<LoginWithMail>params);
  }
}
