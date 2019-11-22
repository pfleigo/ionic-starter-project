import { SessionActions } from './actions';

export interface SessionState {
  username: string;
}

const initialState = {
  username: null
};

export const sessionReducer = (
  state = initialState,
  action: any
): SessionState => {
  switch (action.type) {
    case SessionActions.UPDATE_USER:
      return { username: action.payload.username };

    default:
      return state;
  }
};
