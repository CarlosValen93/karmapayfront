import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUser } from '../../interface/user.interface';
import { IUserExpense } from '../../interface/user-expense.interface';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() miUser!: IUser;
  @Input() miUserExpense!: IUserExpense;

}
