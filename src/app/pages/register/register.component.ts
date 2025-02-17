import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  usersService = inject(UsersService)
  constructor() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      mail: new FormControl(),
      password: new FormControl(),
      checkPassword: new FormControl()
    });
  }
  async onSubmit() {
    /* const user = await this.usersService.register(); */

  }
}
