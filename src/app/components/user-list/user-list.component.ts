
import { Component, inject, Input } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserSearchComponent } from '../user-search/user-search.component';
import { IUser } from '../../interface/user.interface';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import { TeamsService } from '../../services/teams.service';
import Swal from 'sweetalert2';
import { ButtonComponent } from "../button/button.component";



@Component({
  selector: 'app-user-list',
  imports: [UserSearchComponent, UserCardComponent, FormsModule, ButtonComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  arrUsers: IUser[] = [];
  usersServices = inject(UsersService)
  teamsServices = inject(TeamsService)
  inviteByEmail: string = '';
  @Input() idTeam: number = 0;

  async ngOnInit() {
    try {
      let users: IUser[] = await this.usersServices.getByIdGroup(this.idTeam)
      this.arrUsers = users;
    } catch (err) {
      console.log(err);
    }

  }

  async searchByUsername(event: string) {
    try {
      if (event) {
        const result = await this.usersServices.getByUsername(event, this.idTeam);
        this.arrUsers = result
      } else {
        let users: IUser[] = await this.usersServices.getByIdGroup(this.idTeam)
        this.arrUsers = users;
      }
    } catch (err) {
      console.log(err);
    }
  }
  async inviteUser() {
    if (!this.inviteByEmail) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, introduce un email.',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: "tomato",
      });
      return;
    }

    try {

      const user = await this.usersServices.getByEmail(this.inviteByEmail);
      if (!user) {
        Swal.fire({
          title: 'Error',
          text: 'El usuario no existe.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: "tomato",
        });
        return;
      }

      await this.teamsServices.addUserToTeam(user.Id, this.idTeam);


      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Usuario añadido correctamente!",
        showConfirmButton: false,
        timer: 1500
      });

      this.arrUsers = await this.usersServices.getByIdGroup(this.idTeam);

      this.inviteByEmail = '';
    } catch (error) {
      Swal.fire({
        title: 'Error al invitar',
        text: 'Hubo un problema al invitar al usuario. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo',
        confirmButtonColor: "tomato",
      });
      console.error('Error al invitar usuario:', error);
    }
  }

}
