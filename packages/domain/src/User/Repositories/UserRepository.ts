import { User } from "../Entities/User";

export interface UserRepository {
  getUser(): Promise<User>;
}
