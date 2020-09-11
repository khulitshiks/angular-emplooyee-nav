import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import {appRoutingModule} from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, appRoutingModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, EmployeesComponent, DepartmentsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
