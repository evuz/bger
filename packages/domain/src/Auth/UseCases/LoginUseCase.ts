import { inject } from 'depsin';

import { Service } from '../../Domain/models/Service';
import { UseCase } from '../../Domain/models/UseCase';
import { LoginWithProvider, LoginWithMail } from '../Repositories/AuthRepository';
import { AuthSymbols } from '../AuthSymbols';

export class LoginUseCase implements UseCase {
  constructor(@inject(AuthSymbols.Services.Login) private service: Service) {}

  execute(params: LoginWithProvider | LoginWithMail) {
    return this.service.execute(params);
  }
}
