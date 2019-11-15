import { inject } from 'depsin';

import { Service } from '../../Domain/models/Service';
import { UseCase } from '../../Domain/models/UseCase';
import { Entity } from '../../Domain/models/Entity';
import { LeagueSymbols } from '../LeagueSymbols';
import { League } from '../Entities/League';

export class GetLeaguesUseCase implements UseCase {
  constructor(@inject(LeagueSymbols.Services.GetLeagues) private service: Service) {}

  execute() {
    return this.service.execute().then((leagues: Entity<League>[]) => leagues.map(league => league.toJSON()));
  }
}
