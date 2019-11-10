import { inject } from 'depsin';

import { ConfigSymbols } from '../../Config/ConfigSymbols';
import { Config } from '../../Config/Config';
import { UserRepository } from './UserRepository';
import { bearerAuth } from '../../Auth/Utils/bearerAuth';
import { User } from '../Entities/User';

export class BiwengerUserRepository implements UserRepository {
  private get fetcher() {
    return this.config.get('fetcher');
  }

  private get serverUrl() {
    return this.config.get('serverUrl');
  }

  private get storage() {
    return this.config.get('storage');
  }

  constructor(@inject(ConfigSymbols.Config) private config: Config) {}

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
