import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home-component/home-component.component';
import { EmployeesComponent } from './employees-component/employees-component.component';
import { PositionComponent } from './position-component/position-component.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'positions', component: PositionComponent},
  {path:'', redirectTo: "/home", pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
