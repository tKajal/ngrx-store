import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../store/models/users.model';
@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) {

  }
  getUsers() {
    return this.http.get<Users[]>('http://localhost:3000/users');
  }
  getProducts() {
    return this.http.get('https://dummyjson.com/products');
  }
  create(payload: Users) {
    return this.http.post<Users>('http://localhost:3000/users', payload);
  }
  getClients(action:any) {
    console.log(action)
    return this.http.get<Users[]>('http://localhost:3000/clients');
  }
}
