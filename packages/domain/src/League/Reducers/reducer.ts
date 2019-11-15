import { LeagueActions } from './actions';
import { Action } from '../../Adapters/Store/StoreAdapter';
import { League } from '../Entities/League';

const initalState = null;

export function leagueReducer(state = initalState, { type, payload }: Action<League[]>) {
  switch (type) {
    case LeagueActions.Save:
      return payload;
    default:
      return state;
  }
}
