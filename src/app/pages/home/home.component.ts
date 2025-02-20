import { Component, inject } from '@angular/core';
import { TeamListComponent } from '../../components/team-list/team-list.component';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  imports: [TeamListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usersService = inject(UsersService);
}
