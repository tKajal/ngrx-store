import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Appstate } from '../store/models/appstate';
import { Router } from '@angular/router';
import { Users } from '../store/models/users.model';
import { selectAppState } from '../store/selectors/app.selector';
import { setAPIStatus } from '../store/actions/app.action';
import { invokeSaveNewUserAPI } from '../store/actions/users.action';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {
  constructor(
    private store: Store,
    private appStore: Store<Appstate>,
    private router: Router
  ) {}
 
  userForm: Users = {
    id: 0,
    firstName: '',
    lastName: '',
    age:0
  };
 
  ngOnInit(): void {}
 
  save() {
    this.store.dispatch(invokeSaveNewUserAPI({ newUser: this.userForm }));
    let apiStatus$ = this.appStore.pipe(select(selectAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiStatus == 'success') {
        this.appStore.dispatch(
          setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
         this.router.navigate(['/home']);
      }
    });
  }
}
