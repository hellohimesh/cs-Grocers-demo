import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { LabelPrintingComponent } from './label-printing/label-printing.component';
import { SetUpComponent } from './set-up/set-up.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    LabelPrintingComponent,
    SetUpComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
     MDBBootstrapModule.forRoot(),
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
