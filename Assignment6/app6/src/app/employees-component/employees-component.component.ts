import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../data/employee';
import { EmployeeService } from '../data/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees-component.component.html',
  styleUrls: ['./employees-component.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  
  getEmployeesSub: any;
  employees: Employee[];
  loadingError = false;
  filteredEmployees: Employee[];
  
  constructor(private employeeService: EmployeeService,private router: Router) { }
  ngOnInit() {
    this.getEmployeesSub = this.employeeService
      .getEmployees()
      .subscribe(
        employees => {this.employees = employees;
                      this.filteredEmployees = employees;
        },
        () => (this.loadingError = true)
      );
  }
  ngOnDestroy() {
    if (this.getEmployeesSub !== undefined) {
      this.getEmployeesSub.unsubscribe();
    }
  }

  routeEmployee(id: string): void{
    this.router.navigate(["employee",id])
  }

  onEmployeeSearchKeyUP(ben: any): void{
    const AUX = ben.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter(
      ghafouri => (ghafouri.FirstName.toLowerCase().includes(AUX) ||
                   ghafouri.LastName.toLowerCase().includes(AUX) ||
                   ghafouri.Position.PositionName.toLowerCase().includes(AUX) 
      )
    )
  }



}
