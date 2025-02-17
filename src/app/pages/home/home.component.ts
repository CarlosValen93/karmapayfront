import { Component } from '@angular/core';
import { TeamListComponent } from '../../components/team-list/team-list.component';

@Component({
  selector: 'app-home',
  imports: [TeamListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
