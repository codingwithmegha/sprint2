import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awsbems';
  Employee ={
    firstName:'',
    lastName:'',
    emailId:'',
  };
  onSubmit(){
    console.log('Form submitted:', this.Employee);
  }
}
