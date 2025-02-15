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
  registroForm: FormGroup;
  usersService = inject(UsersService)
  constructor() {
    this.registroForm = new FormGroup({
      username: new FormControl(),
      mail: new FormControl(),
      password: new FormControl(),
      checkPassword: new FormControl()
    });
  }
async onSubmit(){
  const user = await this.usersService.register();

}
}
