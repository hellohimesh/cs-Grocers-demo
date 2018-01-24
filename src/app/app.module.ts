import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { LabelPrintingComponent } from './label-printing/label-printing.component';
import { SetUpComponent } from './set-up/set-up.component';
import { SearchComponent } from './search/search.component';
import {dataService} from './data/data.service';
import {SharedModule} from './table-layout/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LabelPrintingComponent,
    SetUpComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
     MDBBootstrapModule.forRoot(),
    Routing
  ],
  exports:[SearchComponent],

  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
