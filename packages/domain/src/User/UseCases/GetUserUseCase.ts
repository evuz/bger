import { inject } from 'depsin';

import { Service } from '../../Domain/models/Service';
import { UseCase } from '../../Domain/models/UseCase';
import { UserSymbols } from '../UserSymbols';

export class GetUserUseCase implements UseCase {
  constructor(@inject(UserSymbols.Services.GetUser) private service: Service) {}

  execute() {
    return this.service.execute();
  }
}
