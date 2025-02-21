import { Component, inject, Input } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {
  
@Input() idUser: string="";
userService = inject(UsersService);
router = inject(Router);
UpdateForm: FormGroup;
iDUser:number = Number(this.idUser);
constructor(){
  this.UpdateForm = new FormGroup({
    username: new FormControl(
      Validators.minLength(3),
      Validators.maxLength(20)
    ),
    email: new FormControl(
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ),
    img: new FormControl()
  })
}

async ngOnInit() { 
 
}

async onSubmit(){

  const userBody = {
    username: this.UpdateForm.value.username,
    email: this.UpdateForm.value.email,
    img: this.UpdateForm.value.img
  };
  this.userService.UpdateProfile(this.iDUser, userBody);
}


checkErrorField(field: string, error: string): boolean {
  return this.UpdateForm.get(field)?.hasError(error) && this.UpdateForm.get(field)?.touched ? true : false;
}
}
