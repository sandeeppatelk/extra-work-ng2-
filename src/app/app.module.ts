import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import {FormsModule} from '@angular/forms';// for input forms
import { HttpModule } from '@angular/http';
import {RouterModule } from '@angular/router';//for router
import {ReactiveFormsModule} from '@angular/forms'; // for model driven forms
import "hammerjs";

import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { ThirdComponent } from './third.component';
import { EmployeeList } from './employee-list.component';
import { EmployeeDetail} from './employee-detail.component';
@NgModule({
  declarations: [
    AppComponent,FirstComponent,SecondComponent,ThirdComponent,EmployeeDetail,EmployeeList
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
