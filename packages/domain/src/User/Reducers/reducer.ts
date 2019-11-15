import { UserActions } from './actions';
import { Action } from '../../Adapters/Store/StoreAdapter';
import { User } from '../Entities/User';

const initialState = null;

export function userReducer(state = initialState, { type, payload }: Action<User>) {
  switch (type) {
    case UserActions.Save:
      return payload;
    default:
      return state;
  }
}
