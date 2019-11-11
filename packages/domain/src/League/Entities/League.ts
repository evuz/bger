import { Entity, IEntity } from '../../Domain/models/Entity';

export interface ILeague extends IEntity<League> {}
export class League extends Entity<ILeague> {
  id: number;
  name: string;
  type: string;
  mode: string;
  created: number;
  scoreID: number;
  icon: string;
  competition: string;
}
