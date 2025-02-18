import { HttpRequest, HttpResponse } from '@angular/common/http';
import { UsersService } from './../../services/users.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup
  router = inject(Router)
  usersService = inject(UsersService)

  constructor() {
  
    this.loginForm = new FormGroup({
      mail: new FormControl(),
      password: new FormControl()
    })
  }
  async onSubmit() {
    try {
      const response = await this.usersService.login(this.loginForm.value);
  

      localStorage.setItem('crm_token', response.token);
  
 
      this.router.navigateByUrl('/home');
    } catch (error: unknown) {
      let errorMessage = 'Usuario o contraseña no válidos.';
  
    
      if (error instanceof HttpResponse && error.status === 401) {
        errorMessage = 'Usuario o contraseña incorrectos.';
      }
  

      Swal.fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Volver a intentar'
      }).then(() => {
        this.router.navigateByUrl('/login');
      });
  
      console.error('Error en el login:', error);
    }
  }


  }


