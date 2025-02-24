import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUser } from '../../interface/user.interface';
import { IUserExpense } from '../../interface/user-expense.interface';
import { ExpensesService } from '../../services/expenses.service';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-user-card',
  imports: [RouterLink, ButtonComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() miUser!: IUser;
  @Input() miUserExpense!: IUserExpense;
  @Input() idTeam!: number

  expensesService = inject(ExpensesService)
  debt: number = 0
  async ngOnInit() {

    try {
      const result = await this.expensesService.getDebtByUserTeam(this.miUser.Id, this.idTeam);
      if (result.length === 0) {
        this.debt = 0
      } else {

        let userDebt = Number(result[0].Debes) || 0;

        this.debt = parseFloat(userDebt.toFixed(2));
      }

    } catch (error) {
      console.error('Error al obtener la deuda:', error);

    }
  }
}
