import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { SetUpComponent } from './set-up/set-up.component';
import { SearchComponent } from './search/search.component';
import {LabelPrintingComponent} from './label-printing/label-printing.component';

const routes: Routes = [
	
    { path: 'set-up', component: SetUpComponent },
    { path: 'search', component: SearchComponent },
    { path: 'label-print', component: LabelPrintingComponent },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })


export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);

//export class AppRoutingModule { }
