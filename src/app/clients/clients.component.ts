import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectClient } from '../store/selectors/client.selector';
import { LoadAllRequests, invokeClientApi } from '../store/actions/client.action';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(public store: Store) { }

  requestList: any = { name: 'test' };

  clients$ = this.store.pipe(select(selectClient));

  ngOnInit(): void {

    //without payload  
    this.store.dispatch(invokeClientApi())

    //add client with static payload 
    //this.LoadRequests()
  }

  LoadRequests() {
    this.store.dispatch(LoadAllRequests({ requestCollection: this.requestList }));
  }

}
