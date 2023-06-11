import { Component ,OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{
  employee:Employee= new Employee();
  ngOnInit(): void {
      throw new Error('Method not implement.');

  }
  constructor(private employeeService: EmployeeService,private router:Router){}
onSubmit(){
  
  console.log(this.employee);
    this.employeeService.createEmployee(this.employee).subscribe(data=>{console.log(data)});
  
}
}
