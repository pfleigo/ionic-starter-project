import { combineReducers, Reducer } from 'redux';
import { PersistState } from 'redux-persist';
import { sessionReducer, SessionState } from './session/reducer';

export const rehydratedSelector = (state: AppState) => {
  return state._persist.rehydrated;
};

// TODO: union type for AppAction
export interface AppState {
  _persist?: PersistState;
  session: SessionState;
}

export const rootReducer: Reducer<AppState> = combineReducers({
  session: sessionReducer
});
