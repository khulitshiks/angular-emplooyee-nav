import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {EmployeesComponent} from './employees/employees.component';
import {DepartmentsComponent} from './departments/departments.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'departments', component: DepartmentsComponent},


  //otherwise redirect to HomeComponent

  {path: '**', redirectTo: ''}
  ];

  export const appRoutingModule = RouterModule.forRoot(routes);

  