import { createReducer, on } from "@ngrx/store";
import { LoadAllRequests, clientSuccessApi } from "../actions/client.action";


export const initialState: any = [];

export const clientReducer = createReducer(
    initialState,
    on(clientSuccessApi, (state, { clientList }) => {
        return clientList;
    }),
    on(LoadAllRequests, (state, { requestCollection }) => ({
        ...state,
        requestCollection: state.requestCollection
    })),
)

