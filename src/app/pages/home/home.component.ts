import { Component, inject } from '@angular/core';
import { TeamListComponent } from '../../components/team-list/team-list.component';

import { UsersService } from '../../services/users.service';
import { ButtonComponent } from "../../components/button/button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [TeamListComponent, ButtonComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usersService = inject(UsersService);
}
