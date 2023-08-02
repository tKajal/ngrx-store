import { createAction, props } from "@ngrx/store";

export const invokeClientApi = createAction(

    '[Client Api] get client data'
)

export const clientSuccessApi = createAction(

    '[Client Api] success client api',
    props<{ clientList: any }>()
)

export const LoadAllRequests = createAction(
    '[Request] LoadAllRequests',
    props<{ requestCollection: any }>()
);