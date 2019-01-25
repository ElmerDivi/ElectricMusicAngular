import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Carousel3Component } from './carousel3/carousel3.component';
import { Contact7Component } from './contact7/contact7.component';
import { AbtUs6Component } from './abt-us6/abt-us6.component';

const routes: Routes = [
  { path: 'carousel3', component: Carousel3Component },
  { path: 'contact7', component: Contact7Component },
  { path: 'abtus6', component: AbtUs6Component },
  { path: '', redirectTo: '/carousel3', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
