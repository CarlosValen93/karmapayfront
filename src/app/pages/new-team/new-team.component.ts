import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TeamsService } from '../../services/teams.service';
import Swal from 'sweetalert2';
import { category } from '../../interface/team.interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-team',
  imports: [ReactiveFormsModule],
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
       name: new FormControl(),
      description: new FormControl(),
       image: new FormControl(),
       category: new FormControl()
       })
}
async onSubmit() {
  if (this.registerForm.invalid) {
      Swal.fire({
          title: 'Error',
          text: 'Por favor, completa todos los campos correctamente.',
          icon: 'error',
          confirmButtonText: 'Revisar'
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
          title: '¡Grupo creado!',
          text: `El grupo ha sido registrado correctamente.`,
          icon: 'success',
          confirmButtonText: 'Aceptar'
      });

      this.registerForm.reset();
      this.router.navigate(['/home']);
   } catch (error: any) {
    console.error(error);

    Swal.fire({
        title: 'Error',
        text: error?.error?.message || 'No se pudo agregar el grupo. Intenta de nuevo.',
        icon: 'error',
        confirmButtonText: 'Cerrar'
    });
}
}

goBack() {
  this.location.back();
}

}
