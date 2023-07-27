// const _counterReducer = createReducer(initialState,
//     on(increment, state => state + 1),
//     on(decrement, state => state - 1),
//     on(reset, state => 0),
//   );

import { createReducer, on } from "@ngrx/store";
import { incInCount } from "../actions/counter.action";

   
const initialState=0;

export const counterReducer=createReducer(initialState,
    on(incInCount,state=>state+1))