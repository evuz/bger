import { inject } from 'depsin';

import { Service } from '../../Domain/models/Service';
import { LeagueSymbols } from '../LeagueSymbols';
import { LeagueRepository } from '../Repositories/LeagueRepository';
import { ConfigSymbols } from '../../Config/ConfigSymbols';
import { ConfigAdapters } from '../../Config/ConfigTypes';

export class GetLeaguesService implements Service {
  get store() {
    return this.adapters.get('store');
  }

  constructor(
    @inject(LeagueSymbols.Repositories.League) private repository: LeagueRepository,
    @inject(ConfigSymbols.Adapters) private adapters: ConfigAdapters,
  ) {}

  async execute() {
    const { leagues } = this.store.getState();
    if (leagues) {
      return Promise.resolve(leagues);
    }
    return this.repository.getLeagues();
  }
}
