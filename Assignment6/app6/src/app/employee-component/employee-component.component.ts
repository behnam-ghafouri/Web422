import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../data/employee.service';
import { ActivatedRoute } from '@angular/router';
import { PositionService } from '../data/position.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponent implements OnInit {

  paramSubscription: any;
  employeeSubscription: any;
  getPositionsSubcription: any;
	saveEmployeeSubscription: any;
  employee: any;
	positions: any;
	successMessage: any;
  failMessage: any;

  constructor(private employeeservice: EmployeeService,
              private positionservice: PositionService,
              private activatedroute: ActivatedRoute  
              ) { }


  ngOnInit() {
      this.paramSubscription = this.activatedroute.params.subscribe(
        (params: {_id: string}) =>{
          this.employeeSubscription = this.employeeservice
          .getEmployee(params._id)
          .subscribe(employees => {
            this.employee = employees[0];
            this.employee.Position = (this.employee.Position as any)._id;
          })
        }
      );
      this.getPositionsSubcription = this.positionservice
      .getPositions()
      .subscribe(positions => (this.positions = positions));
  }

  onSubmit(): void{
    this.saveEmployeeSubscription = this.employeeservice
    .saveEmployee(this.employee)
    .subscribe(
      ()=>{
        this.successMessage = true;
        setTimeout(()=>(this.successMessage = false), 2500);
      },
      ()=>{
        this.failMessage = true;
        setTimeout(()=>(this.failMessage = false), 2500);
      }
    )
  }

  ngonDestroy(){
    if(this.paramSubscription){
      this.paramSubscription.unsubscribe();
    }
    if(this.employeeSubscription){
      this.employeeSubscription.unsubscribe();
    }
    if(this.getPositionsSubcription){
      this.getPositionsSubcription.unsubscribe();
    }
    if(this.saveEmployeeSubscription){
      this.saveEmployeeSubscription.unsubscribe();
    }
  }



}
