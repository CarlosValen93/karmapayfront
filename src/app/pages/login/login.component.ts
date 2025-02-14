import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup

  constructor() {
  
    this.loginForm = new FormGroup({
      mail: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(){

  }

}
