import { Component, inject, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interface/user.interface';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-user',
  imports: [ButtonComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() idUser: string = "";
  usersService = inject(UsersService);
  router = inject(Router);
  user!: IUser;
  location = inject(Location);

  async ngOnInit() {
    try {
      let id: number = Number(this.idUser);
      let response = await this.usersService.getById(id);
      if (response) {
        this.user = response;
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El Id de usuario no existe",
        });
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log(error)
    }
  }

  goBack() {
    this.location.back();
  }



  async LogOut() {
    await this.usersService.logout()
    this.router.navigateByUrl('/home')
  }



}
