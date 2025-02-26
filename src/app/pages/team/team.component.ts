import { Component, inject, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ExpenseListComponent } from "../../components/expense-list/expense-list.component";
import { UserListComponent } from "../../components/user-list/user-list.component";
import { ITeam } from '../../interface/team.interface';
import { TeamsService } from '../../services/teams.service';
import Swal from 'sweetalert2';
import { Observable, from } from 'rxjs';
import { ButtonComponent } from "../../components/button/button.component";


@Component({
  selector: 'app-team',
  imports: [RouterLink, ExpenseListComponent, UserListComponent, ButtonComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  @Input() idTeam: number = 0;
  teamsService = inject(TeamsService);
  router = inject(Router);
  team!: ITeam
  isOwner: boolean = false;


  async ngOnInit() {
    try {
      let id: number = Number(this.idTeam);
      let response = await this.teamsService.getById(id);

      if (response) {
        this.team = response.team;
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El Id de grupo no existe",
        });
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error)
    }
    this.isOwner = await this.teamsService.isOwner(this.idTeam);
  }



  async ngDeleteTeam() {
    try {

      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás recuperar el grupo una vez borrado!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "tomato",
        confirmButtonText: "Sí, borrar!",
        cancelButtonText: "Cancelar"
      }).then(async (result) => {
        if (result.isConfirmed) {

          let id: number = Number(this.idTeam);
          await this.teamsService.deleteTeam(id);

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "¡Grupo borrado!",
            showConfirmButton: false,
            timer: 1500
          });

          this.router.navigate(['/home']);

        }
      });



    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "¡Error al borrar el grupo!",
        confirmButtonColor: "tomato"
      });
    }
  }

  ngChangeInfo() {
  }




}
