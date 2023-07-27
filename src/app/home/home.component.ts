import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUsers } from '../store/selectors/users.selector';
import { invokeUsersAPI } from '../store/actions/users.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}
  users$ = this.store.pipe(select(selectUsers));
 
  ngOnInit(): void {
    this.store.dispatch(invokeUsersAPI());
  }
}
