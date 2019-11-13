import { LeagueActions } from './actions'

const initalState = null;

export function leagueReducer (state = initalState, { type, payload }) {
  switch (type) {
    case LeagueActions.Save:
      return payload;
    default:
      return state;
  }
}
