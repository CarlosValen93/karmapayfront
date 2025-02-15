import { Component, inject, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interface/user.interface';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() idUser: string="";
  usersService=inject(UsersService);
  router =inject(Router);
  user!: IUser;

ngOnInit(){
  
}

}
