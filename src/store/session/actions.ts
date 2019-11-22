import { dispatch } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../reducer';

@Injectable({
  providedIn: 'root'
})
export class SessionActions {
  static readonly UPDATE_USER = 'UPDATE_USER';

  constructor() {}

  @dispatch()
  updateUser = (
    username: string
  ): ThunkAction<void, AppState, undefined, any> => (
    thunkDispatch,
    getState
  ) => {
    thunkDispatch({
      type: SessionActions.UPDATE_USER,
      payload: { username }
    });
  };
}
