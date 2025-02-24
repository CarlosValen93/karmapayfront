import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeamsService } from '../../services/teams.service';
import Swal from 'sweetalert2';
import { category } from '../../interface/team.interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-new-team',
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './new-team.component.html',
  styleUrl: './new-team.component.css'
})
export class NewTeamComponent {
  registerForm: FormGroup;
  teamsService = inject(TeamsService);
  router = inject(Router);
  location = inject(Location);
   constructor() {
      this.registerForm = new FormGroup({
       name: new FormControl('', [ Validators.required]),
      description: new FormControl('',
        
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]),
       image: new FormControl(),
       category: new FormControl('',[Validators.required])
       })
}
async onSubmit() {
  if (this.registerForm.invalid) {
      Swal.fire({
          title: 'Error',
          text: 'Por favor, completa todos los campos correctamente.',
          icon: 'error',
          confirmButtonText: 'Revisar',
          confirmButtonColor: "tomato"
      });
      return;
  }

  const teamBody = {
    name: this.registerForm.value.name,
    description: this.registerForm.value.description,
    category: this.registerForm.value.category,
    img: this.registerForm.value.image
  };


  try {
      await this.teamsService.add(teamBody);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Grupo creado correctamente!",
        showConfirmButton: false,
        timer: 1500
      });

      this.registerForm.reset();
      this.router.navigate(['/home']);
   } catch (error: any) {
    console.error(error);

    Swal.fire({
        title: 'Error',
        text: error?.error?.message || 'No se pudo agregar el grupo. Intenta de nuevo.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: "tomato"
    });
}
}

goBack() {
  this.location.back();
}


checkErrorField(field: string, error: string): boolean {
  if (this.registerForm.get(field)?.hasError(error) && this.registerForm.get(field)?.touched) {
    return true;
  }
  return false;
}



}


