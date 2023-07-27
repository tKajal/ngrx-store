
import { createReducer, on } from "@ngrx/store";
import { decInCount, incInCount } from "../actions/counter.action";


const initialState = 0;

export const counterReducer = createReducer(initialState,
    on(incInCount, state => state + 1),
    on(decInCount, state => state - 1)
)
