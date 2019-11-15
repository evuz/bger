import { League } from '../Entities/League';

export interface LeagueRepository {
  getLeagues(): Promise<League[]>;
  getLeague(id): Promise<League>;
}
