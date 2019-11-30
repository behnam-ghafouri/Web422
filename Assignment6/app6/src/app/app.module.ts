import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav-component/nav-component.component';
import { ContentComponent } from './content-component/content-component.component';
import { FooterComponent } from './footer-component/footer-component.component';
import { HomeComponent } from './home-component/home-component.component';
import { EmployeesComponent } from './employees-component/employees-component.component';
import { PositionComponent} from './position-component/position-component.component';
import { PageNotFoundComponent } from './page-not-found-component/page-not-found-component.component';
import { EmployeeService } from './data/employee.service';
import { PositionService } from './data/position.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee-component/employee-component.component';
import { PositioComponent } from './positio-component/positio-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    EmployeesComponent,
    PositionComponent,
    PageNotFoundComponent,
    EmployeeComponent,
    PositioComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService, PositionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
