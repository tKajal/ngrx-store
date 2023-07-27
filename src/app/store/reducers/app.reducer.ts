import { createReducer, on } from '@ngrx/store';
import { Appstate } from '../models/appstate';
import { setAPIStatus } from '../actions/app.action';
 
export const initialState: Readonly<Appstate> = {
  apiResponseMessage: '',
  apiStatus: '',
};
 
export const appReducer = createReducer(
  initialState,
  on(setAPIStatus, (state, { apiStatus }) => {
    return {
      ...state,
      ...apiStatus
    };
  })
);