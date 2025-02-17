import { Component } from '@angular/core';
import { TeamCardComponent } from '../team-card/team-card.component';

@Component({
  selector: 'app-team-list',
  imports: [TeamCardComponent],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent {

}
