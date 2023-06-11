import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL= "http://localhost:8080/api/v1/details";
  constructor(private httpClient:HttpClient){}
  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  private baseURL1= "http://localhost:8080/api/v1/save";
  createEmployee(employee:Employee):Observable<object>{
    return this.httpClient.post(`${this.baseURL1}`,employee);
  }
  private baseURL2= "http://localhost:8080/api/v1/update/{id}";
  updateEmployee(id:number, employee:Employee):Observable<object>{
    return this.httpClient.put(`${this.baseURL2}/${id}`,employee);

  }
  getEmployeeBYId(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    }
 }

 
