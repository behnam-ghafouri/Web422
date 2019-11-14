import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../data/employee';
import { EmployeeService } from '../data/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees-component.component.html',
  styleUrls: ['./employees-component.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  
  getEmployeesSub: any;
  employees: Employee[];
  loadingError = false;
  constructor(private employeeService: EmployeeService) { }
  ngOnInit() {
    this.getEmployeesSub = this.employeeService
      .getEmployees()
      .subscribe(
        employees => (this.employees = employees),
        () => (this.loadingError = true)
      );
  }
  ngOnDestroy() {
    if (this.getEmployeesSub !== undefined) {
      this.getEmployeesSub.unsubscribe();
    }
  }

}
