import { Component, inject, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ExpenseListComponent } from "../../components/expense-list/expense-list.component";
import { UserListComponent } from "../../components/user-list/user-list.component";
import { ITeam } from '../../interface/team.interface';
import { TeamsService } from '../../services/teams.service';
import Swal from 'sweetalert2';
import { Observable, from } from 'rxjs';


@Component({
  selector: 'app-team',
  imports: [RouterLink, ExpenseListComponent, UserListComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  @Input() idTeam: number = 0;
  teamsService = inject(TeamsService);
  router = inject(Router);
  team!: ITeam
  isOwner: Observable<boolean> = new Observable<boolean>();


  async ngOnInit() {
    try {
      let id: number = Number(this.idTeam);
      let response = await this.teamsService.getById(id);
      console.log(response)
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
      //  Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "Error al obtener el grupo",
      // });
      // this.router.navigate(['/home']);
    }
    this.isOwner = from(this.teamsService.isOwner(this.idTeam));
  }



  async ngDeleteTeam() {
    try {
      let id: number = Number(this.idTeam);
      let response = await this.teamsService.deleteTeam(id);
      Swal.fire({
        icon: "success",
        title: "Borrado!",
        text: "El grupo ha sido borrado",
      });
      this.router.navigate(['/home']);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al borrar el grupoo",
      });
    }
  }

  ngChangeInfo() {
  }




}
