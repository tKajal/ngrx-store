import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [{

  path: 'home',
  component: HomeComponent
},
{
  path: 'products',
  component: BlogsComponent
},
{
  path: 'add',
  component: AddUserComponent,
},
{

  path: 'clients',
  component: ClientsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
