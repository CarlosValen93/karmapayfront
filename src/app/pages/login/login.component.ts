import { HttpResponse } from '@angular/common/http';
import { UsersService } from './../../services/users.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from '../../environments/environment';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup
  router = inject(Router)
  usersService = inject(UsersService)

  constructor() {

    this.loginForm = new FormGroup({
      mail: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ]),
      password: new FormControl('', [
        Validators.required


      ])
    })
  }
  async onSubmit() {
    try {
      const response = await this.usersService.login(this.loginForm.value);

      localStorage.setItem(environment.tokenName, response.token);
      this.loginForm.reset();
      this.router.navigateByUrl('/home');
    } catch (error: unknown) {
      let errorMessage = 'Email o contraseña no válidos.';

      if (error instanceof HttpResponse && error.status === 401) {
        errorMessage = 'Email o contraseña incorrectos.';
      }

      Swal.fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Volver a intentar',
        confirmButtonColor: "tomato",
      }).then(() => {
        this.router.navigateByUrl('/login');
      });

      this.loginForm.reset();
      console.error('Error en el login:', error);
    }
  }
  checkErrorField(field: string, error: string): boolean {
    if (this.loginForm.get(field)?.hasError(error) && this.loginForm.get(field)?.touched) {
      return true;
    }
    return false;
  }




}


