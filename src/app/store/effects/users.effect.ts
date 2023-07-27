import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { WebService } from 'src/app/services/web.service';
import { selectUsers } from '../selectors/users.selector';
import { invokeSaveNewUserAPI, invokeUsersAPI, saveNewUserAPISucess, usersFetchAPISuccess } from '../actions/users.action';
import { Store, select } from '@ngrx/store';
import { Users } from '../models/users.model';
import { Appstate } from '../models/appstate';
import { setAPIStatus } from '../actions/app.action';
 
@Injectable()

export class UsersEffect {
  constructor(
    private actions$: Actions,
    private usersService: WebService,
    private store: Store<Users>,
    private appStore: Store<Appstate>
  ) {}

 
  loadAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(invokeUsersAPI),
      withLatestFrom(this.store.pipe(select(selectUsers))),
      mergeMap(([, userformStore]) => {
        console.log(userformStore)
        if (userformStore.length > 0) {
          return EMPTY;
        }
        return this.usersService
          .getUsers()
          .pipe(map((data:any) => usersFetchAPISuccess({ allUsers: data })));
      })
    )
  );

  // existing code hidden for display purpose
 
  saveNewUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeSaveNewUserAPI),
      switchMap((action) => {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        return this.usersService.create(action.newUser).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIStatus({
                apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
              })
            );
            return saveNewUserAPISucess({ newUser: data });
          })
        );
      })
    );
  });
}