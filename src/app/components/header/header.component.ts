import { environment } from './../../environments/environment';
import { CustomPayload } from './../../guards/auth.guard';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  usersService = inject(UsersService);
  userId!: number;


  ngOnInit() {
    const token = localStorage.getItem(environment.tokenName)!;
    const payload = jwtDecode<CustomPayload>(token);
    this.userId = payload.userId;

  }
}
