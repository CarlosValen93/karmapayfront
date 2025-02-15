import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserSearchComponent } from '../user-search/user-search.component';



@Component({
  selector: 'app-user-list',
  imports: [UserCardComponent, UserSearchComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

}
