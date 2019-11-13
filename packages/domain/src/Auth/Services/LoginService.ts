import { inject } from 'depsin';

import { Service } from '../../Domain/models/Service';
import { LoginWithProvider, LoginWithMail, AuthRepository } from '../Repositories/AuthRepository';
import { AuthSymbols } from '../AuthSymbols';
import { UserSymbols } from '../../User/UserSymbols';

export class LoginService implements Service {
  constructor(
    @inject(AuthSymbols.Repositories.Auth) private repository: AuthRepository,
    @inject(UserSymbols.Services.GetUser) private getUserService: Service,
  ) {}

  async execute(params: LoginWithProvider | LoginWithMail) {
    if ((<LoginWithProvider>params).provider) {
      await this.repository.loginWithProvider(<LoginWithProvider>params);
    } else {
      await this.repository.loginWithMail(<LoginWithMail>params);
    }
    return this.getUserService.execute();
  }
}
