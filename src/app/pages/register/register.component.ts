import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  usersService = inject(UsersService)
  router = inject(Router)
  constructor() {
    this.registerForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)

      ]),
      checkPassword: new FormControl('', [])

    }, [this.passwordvalidator]);
  }
  passwordvalidator(formFields: AbstractControl): any {
    let password = formFields.get('password')?.value;
    let checkPassword = formFields.get('checkPassword')?.value;

    if (!password || !checkPassword) {
      return null;
    }

    return password === checkPassword ? null : { 'passwordvalidator': true };
  }
  //Poner que pasa cuando el nombre de un usuario ya esta cogido
  async onSubmit() {
    if (this.registerForm.invalid) return;
  
    try {
      await this.usersService.register(this.registerForm.value);
  
      Swal.fire({
        title: '¡Registrado con éxito!',
        text: 'El usuario se ha registrado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: "tomato",
      }).then(() => {
        this.router.navigate(['/home']);
      });
  
      this.registerForm.reset();
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al registrarse. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo',
        confirmButtonColor: "tomato",
      });
  
      console.error('Error en registro:', error);
    }
  }
  

  checkErrorField(field: string, error: string): boolean {
    return this.registerForm.get(field)?.hasError(error) && this.registerForm.get(field)?.touched ? true : false;
  }

}
