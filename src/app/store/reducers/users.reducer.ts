import { createReducer, on } from "@ngrx/store";
import { Users } from "../models/users.model";
import { saveNewUserAPISucess, usersFetchAPISuccess } from "../actions/users.action";
 
export const initialState: ReadonlyArray<Users> = [];
 
export const usersReducer = createReducer(
    initialState,
    on(usersFetchAPISuccess, (state, { allUsers }) => {
      return allUsers;
    })
);

export const userReducer = createReducer(
  initialState,
  on(usersFetchAPISuccess, (state, { allUsers }) => {
    return allUsers;
  }),
  on(saveNewUserAPISucess, (state, { newUser }) => {
    let newState = [...state];
    newState.unshift(newUser);
    return newState;
  })
)