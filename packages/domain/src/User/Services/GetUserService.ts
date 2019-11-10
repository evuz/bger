import { Service } from '../../Domain/models/Service';
import { inject } from 'depsin';
import { UserSymbols } from '../UserSymbols';
import { UserRepository } from '../Repositories/UserRepository';

export class GetUserService implements Service {
  constructor(@inject(UserSymbols.Repositories.User) private repository: UserRepository) {}

  execute() {
    return this.repository.getUser();
  }
}
