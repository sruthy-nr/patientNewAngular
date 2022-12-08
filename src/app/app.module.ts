import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from './search/search.component';

const myRoute:Routes=[
  
  {
    path:"",
    component:AddComponent
  },
  {
    path:"view",
    component:ViewComponent
  },
  {
    path:"search",
    component:SearchComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    NavComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
