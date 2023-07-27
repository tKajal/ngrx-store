import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './store/reducers/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffect } from './store/effects/users.effect';
import { appReducer } from './store/reducers/app.reducer';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { counterReducer } from './store/reducers/counter.reducer';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ appState: appReducer,usersList:usersReducer,count: counterReducer}),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([UsersEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
