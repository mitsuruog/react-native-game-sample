import { ActionType } from 'typesafe-actions';

import { INCREMENT } from '../shared/services/Constants';
import * as actions from '../actions';

export type Action = ActionType<typeof actions>;

export interface GameState {
  readonly count: number;
}

const initialState = {
  count: 0,
}

export const gameReducer = (state: GameState = initialState, action: Action): GameState => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    default:
      return state;
  }
}