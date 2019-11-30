import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { baseUrl } from '../helper';
import { HttpClient } from '@angular/common/http';
import { employeeRaw } from './employeeRaw';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  constructor(private readonly http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${baseUrl}employees`);
  }

  saveEmployee(employee: employeeRaw): Observable<any>{
    return this.http.put<any>(`${baseUrl}employee/${employee._id}`,employee);
  }

  getEmployee(id): Observable<employeeRaw[]>{
    return this.http.get<employeeRaw[]>(`${baseUrl}employee-raw/${id}`);
  }
}
