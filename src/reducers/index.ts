import { combineReducers } from 'redux';

import { gameReducer, GameState } from './GameReducer';

export type RootState = {
  game: GameState,
};

export const rootReducers = combineReducers({
  game: gameReducer,
});