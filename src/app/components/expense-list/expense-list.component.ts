import { IExpense } from './../../interface/expense.interface';
import { Component, inject } from '@angular/core';
import { ExpenseCardComponent } from '../expense-card/expense-card.component';
import { ExpenseSearchComponent } from '../expense-search/expense-search.component';
import { ExpensesService } from '../../services/expenses.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-expense-list',
  imports: [ExpenseCardComponent, ExpenseSearchComponent, RouterLink],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {
  arrExpenses: IExpense[] =[];
  expensesServices = inject(ExpensesService);

  async ngOnInit(){
    try {
      let expenses: IExpense[] = await this.expensesServices.getAll()
      this.arrExpenses = expenses;
      console.log(this.arrExpenses);
    } catch (err) {
      console.log(err);
    }
  }

  async searchByName(event: string) {
    try {
      const result = await this.expensesServices.getByName(event);
      this.arrExpenses = result ? [result] : [];
    } catch (err) {
      console.log(err);
    }
  }


}
