import { LeagueRepository } from './LeagueRepository';

export class BiwengerLeagueRepository implements LeagueRepository {
  getLeagues(): any {
    throw 'BiwengerLeagueRepository#getLeagues: you must set leagues in store';
  }

  getLeague(id): any {
    throw `BiwengerLeagueRepository#getLeague: you must set league ${id} in store`;
  }
}
