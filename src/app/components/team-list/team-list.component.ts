import { TeamsService } from './../../services/teams.service';
import { Component, inject } from '@angular/core';
import { TeamCardComponent } from '../team-card/team-card.component';
import { ITeam } from '../../interface/team.interface';

@Component({
  selector: 'app-team-list',
  imports: [TeamCardComponent],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent {
  /*   arrTeams: ITeam[] = [];
    teamsService: inject(TeamsService);
  }
  
  ngOnInit() {
  */
} 