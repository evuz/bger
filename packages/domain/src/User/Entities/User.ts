import { Entity, IEntity } from '../../Domain/models/Entity';

export interface IUser extends IEntity<User> {}
export class User extends Entity<IUser> {
  id: number;
  name: string;
  email: string;
  locale: string;
  status: string;
  created: number;
}
