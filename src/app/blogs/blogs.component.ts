import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { incInCount } from '../store/actions/counter.action';
import { Observable } from 'rxjs';
import { count } from '../store/selectors/counter.selector';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent {
  products:any;

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select(count));
  }

  increment() {
    this.store.dispatch(incInCount());
  }
 
}
