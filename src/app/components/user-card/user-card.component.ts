import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUser } from '../../interface/user.interface';
import { IUserExpense } from '../../interface/user-expense.interface';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'app-user-card',
  imports: [RouterLink],
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
      const result = await this.expensesService.getDebtByUserTeam(this.idTeam, this.miUser.Id);
      let userDebt = Number(result?.userdebt?.Debes) || 0;


      this.debt = parseFloat(userDebt.toFixed(2));

    } catch (error) {
      console.error('Error al obtener la deuda:', error);
      this.debt = 0; // Valor por defecto en caso de error
    }
  }
}
