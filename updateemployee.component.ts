import { Component ,OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit{
[x: string]: any;
id!:number;
employee!:Employee;
constructor(private route:ActivatedRoute,private router:Router, private employeeService:EmployeeService){}

ngOnInit(): void {
    this.employee=new Employee();
    this.id=this.route.snapshot.params['employee_id'];

    this.employeeService.getEmployeeBYId(this.id).subscribe(data =>{console.log(data);
    this.employee= new Employee();
 this.goToList();
},
 error =>console.error(error));
  
}
updateEmployee() {
  this.employeeService.updateEmployee(this.id, this.employee)
    .subscribe(data => {
      console.log(data);
      this.employee = new Employee();
      this.goToList();
    }, error => console.log(error));
}
onSubmit(){
  this.updateEmployee();
}

goToList(){
  this.router.navigate(['/details']);
}
}