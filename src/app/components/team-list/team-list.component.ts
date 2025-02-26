import { TeamsService } from './../../services/teams.service';
import { Component, inject, Input } from '@angular/core';
import { TeamCardComponent } from '../team-card/team-card.component';
import { ITeam } from '../../interface/team.interface';
import { SelectCategoryComponent } from "./select-category/select-category.component";

@Component({
  selector: 'app-team-list',
  imports: [TeamCardComponent, SelectCategoryComponent],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css'
})
export class TeamListComponent {
  arrTeams: ITeam[] = [];
  teamsService = inject(TeamsService);
  @Input() category: string = "";
  categoryImg: string = "";

  async ngOnInit() {

    try {
      let response: ITeam[] = await this.teamsService.getAll();
      this.arrTeams = response;

    }

    catch (err) {
      console.log(err);

    }
  }

  async selectCategory(event: any) {
    try {

      let result;
      if (event === "") {
        result = await this.teamsService.getAll();
      } else {
        result = await this.teamsService.getByCategory(event);
      }
      this.arrTeams = result;

    } catch (err) {
      console.log(err);
    }
  }
}

