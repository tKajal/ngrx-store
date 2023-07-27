import { createAction, props } from '@ngrx/store';
import { Users } from '../models/users.model';
 
export const invokeUsersAPI = createAction(
  '[Users API] Invoke Users Fetch API'
);
 
export const usersFetchAPISuccess = createAction(
  '[Users API] Fetch API Success',
  props<{ allUsers: Users[] }>()
);

export const invokeSaveNewUserAPI = createAction(
  '[Users API] Inovke save new user api',
  props<{ newUser: Users }>()
);
 
export const saveNewUserAPISucess = createAction(
  '[Users API] save new user api success',
  props<{ newUser: Users }>()
);