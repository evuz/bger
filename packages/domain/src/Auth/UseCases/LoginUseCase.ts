import { inject } from 'depsin';

import { Service } from '../../Domain/models/Service';
import { UseCase } from '../../Domain/models/UseCase';
import { LoginWithProvider, LoginWithMail } from '../Repositories/AuthRepository';
import { AuthSymbols } from '../AuthSymbols';
import { Entity } from '../../Domain/models/Entity';
import { User } from '../../User/Entities/User';

export class LoginUseCase implements UseCase {
  constructor(@inject(AuthSymbols.Services.Login) private service: Service) {}

  execute(params: LoginWithProvider | LoginWithMail) {
    return this.service.execute(params).then((user: Entity<User>) => user.toJSON());
  }
}
