import { inject } from 'depsin';

import { Service } from '../../Domain/models/Service';
import { UserSymbols } from '../UserSymbols';
import { UserRepository } from '../Repositories/UserRepository';
import { ConfigSymbols } from '../../Config/ConfigSymbols';
import { ConfigAdapters } from '../../Config/ConfigTypes';
import { UserActions } from '../Reducers/actions';

export class GetUserService implements Service {
  get store() {
    return this.adapters.get('store');
  }

  constructor(
    @inject(UserSymbols.Repositories.User) private repository: UserRepository,
    @inject(ConfigSymbols.Adapters) private adapters: ConfigAdapters,
  ) {}

  execute() {
    const { user } = this.store.getState();
    if (user) {
      return Promise.resolve(user);
    }
    return this.repository.getUser().then(u => {
      this.store.dispatch({ type: UserActions.Save, payload: u });
      return u;
    });
  }
}
