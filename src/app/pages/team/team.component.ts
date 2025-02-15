import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExpenseListComponent } from "../../components/expense-list/expense-list.component";
import { UserListComponent } from "../../components/user-list/user-list.component";
import { ITeam } from '../../interface/team.interface';


@Component({
  selector: 'app-team',
  imports: [RouterLink, ExpenseListComponent, UserListComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  @Input() miTeam!: ITeam;

}
