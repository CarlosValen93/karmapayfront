import { Component, inject } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserSearchComponent } from '../user-search/user-search.component';
import { IUser } from '../../interface/user.interface';
import { UsersService } from '../../services/users.service';



@Component({
  selector: 'app-user-list',
  imports: [UserSearchComponent, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  arrUsers: IUser[] =[];
  usersServices = inject(UsersService)




}
