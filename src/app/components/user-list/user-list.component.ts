import { Component, inject, Input } from '@angular/core';
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
  arrUsers: IUser[] = [];
  usersServices = inject(UsersService)
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


}
