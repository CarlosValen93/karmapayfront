import { Component, Input } from '@angular/core';
import { IExpense } from '../../interface/expense.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-expense-card',
  imports: [RouterLink],
  templateUrl: './expense-card.component.html',
  styleUrl: './expense-card.component.css'
})
export class ExpenseCardComponent {
  @Input() miExpense!: IExpense;

}
