import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

//import { HttpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { Footer2Component } from './footer2/footer2.component';
import { Carousel3Component } from './carousel3/carousel3.component';
import { Hocards5Component } from './hocards5/hocards5.component';
import { BgImg4Component } from './bg-img4/bg-img4.component';
import { Contact7Component } from './contact7/contact7.component';
import { AppRoutingModule } from './/app-routing.module';
import { AbtUs6Component } from './abt-us6/abt-us6.component';
import { TableHttp8Component } from './table-http8/table-http8.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Footer2Component,
    Carousel3Component,
    Hocards5Component,
    BgImg4Component,
    Contact7Component,
    AbtUs6Component,
    TableHttp8Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
	//HttpModule,
	HttpClientModule,
	AgmCoreModule.forRoot({
	  apiKey: 'AIzaSyAHqTWnhewDkEJs_a9OWpYPwLtkR4v5ZEM'
	}),
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
