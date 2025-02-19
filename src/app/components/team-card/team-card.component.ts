import { Component, Input } from '@angular/core';
import { ITeam } from '../../interface/team.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-card',
  imports: [RouterLink],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css'
})
export class TeamCardComponent {

  @Input() oneTeam!: ITeam;
}
