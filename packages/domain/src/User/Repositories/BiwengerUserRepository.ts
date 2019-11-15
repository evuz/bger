import { inject } from 'depsin';

import { ConfigSymbols } from '../../Config/ConfigSymbols';
import { ConfigAdapters, ConfigValues } from '../../Config/ConfigTypes';
import { UserRepository } from './UserRepository';
import { bearerAuth } from '../../Auth/Utils/bearerAuth';
import { User } from '../Entities/User';
import { League } from '../../League/Entities/League';
import { LeagueActions } from '../../League/Reducers/actions';

export function mapperUser(user): User {
  return new User({
    id: user.id,
    name: user.name,
    email: user.email,
    locale: user.locale,
    status: user.status,
    created: user.created,
  });
}

export function mapperLeagues(leagues: any[]): League[] {
  return leagues.map(league => {
    return new League({
      id: league.id,
      name: league.name,
      type: league.type,
      mode: league.mode,
      created: league.created,
      scoreId: league.scoreID,
      icon: league.icon,
      competition: league.competition,
    });
  });
}

export class BiwengerUserRepository implements UserRepository {
  private get fetcher() {
    return this.adapters.get('fetcher');
  }

  private get storage() {
    return this.adapters.get('storage');
  }

  private get store() {
    return this.adapters.get('store');
  }

  private get serverUrl() {
    return this.config.get('serverUrl');
  }

  constructor(
    @inject(ConfigSymbols.Adapters) private adapters: ConfigAdapters,
    @inject(ConfigSymbols.Config) private config: ConfigValues,
  ) {}

  async getUser() {
    const token = await this.storage.get('token');
    const headers = bearerAuth(token);
    return this.fetcher.get(`${this.serverUrl}/account`, { headers }).then(res => {
      const { account: user, leagues } = res.data;
      this.store.dispatch({ type: LeagueActions.Save, payload: mapperLeagues(leagues) });
      return mapperUser(user);
    });
  }
}
