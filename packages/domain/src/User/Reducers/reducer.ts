import { UserActions } from './actions';

const initialState = null;

export function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case UserActions.Save:
      return payload;
    default:
      return state;
  }
}
