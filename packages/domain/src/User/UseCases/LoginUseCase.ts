import { inject } from 'depsin';

import { Service } from '../../Domain/models/Service';
import { UseCase } from '../../Domain/models/UseCase';
import { LoginWithProvider, LoginWithUsername } from '../Repositories/LoginRepository';
import { UserSymbols } from '../UserSymbols';

export class LoginUseCase implements UseCase {
  constructor(@inject(UserSymbols.Services.Login) private service: Service) {}

  execute(params: LoginWithProvider | LoginWithUsername) {
    return this.service.execute(params);
  }
}
