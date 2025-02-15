import { IExpense } from './../../interface/expense.interface';
import { Component, inject } from '@angular/core';
import { ExpenseCardComponent } from '../expense-card/expense-card.component';
import { ExpenseSearchComponent } from '../expense-search/expense-search.component';
import { ExpensesService } from '../../services/expenses.service';

@Component({
  selector: 'app-expense-list',
  imports: [ExpenseCardComponent, ExpenseSearchComponent],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {
  arrExpenses: IExpense[] =[];
  expensesServices = inject(ExpensesService);





}
