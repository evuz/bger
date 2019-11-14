import { inject } from 'depsin';

import { ConfigSymbols } from '../../Config/ConfigSymbols';
import { ConfigAdapters, ConfigValues } from '../../Config/ConfigTypes';
import { UserRepository } from './UserRepository';
import { bearerAuth } from '../../Auth/Utils/bearerAuth';
import { User } from '../Entities/User';

export class BiwengerUserRepository implements UserRepository {
  private get fetcher() {
    return this.adapters.get('fetcher');
  }

  private get serverUrl() {
    return this.config.get('serverUrl');
  }

  private get storage() {
    return this.adapters.get('storage');
  }

  constructor(
    @inject(ConfigSymbols.Adapters) private adapters: ConfigAdapters,
    @inject(ConfigSymbols.Config) private config: ConfigValues,
  ) {}

  async getUser() {
    const token = await this.storage.get('token');
    const headers = bearerAuth(token);
    return this.fetcher.get(`${this.serverUrl}/account`, { headers }).then(res => {
      const { account } = res.data;
      return new User({
        id: account.id,
        name: account.name,
        email: account.email,
        locale: account.locale,
        status: account.status,
        created: account.created,
      });
    });
  }
}
