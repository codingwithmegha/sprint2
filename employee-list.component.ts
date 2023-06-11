import { Component ,OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employee!:Employee[];
  ngOnInit(): void {
      this.getEmployee();
  }
  constructor(private employeeService:EmployeeService){}
  private getEmployee(){
    this.employeeService.getEmployeeList().subscribe((data=>{this.employee=data}));
  }

}
