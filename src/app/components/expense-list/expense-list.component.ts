import { IExpense } from './../../interface/expense.interface';
import { Component, inject, Input } from '@angular/core';
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
  @Input() idTeam: number = 0;


  async ngOnInit(){
    try {
      let expenses: IExpense[] = await this.expensesServices.getbyIdGroup(this.idTeam)
      this.arrExpenses = expenses;
    } catch (err) {
      console.log(err);
    }
  }

  async searchByName(event: string) {
    try {
      if (event) {
        const result = await this.expensesServices.getByName(event, this.idTeam);
        this.arrExpenses = result
        console.log(result)
      } else {
        let expenses: IExpense[] = await this.expensesServices.getbyIdGroup(this.idTeam)
        this.arrExpenses = expenses;
      }
    } catch (err) {
      console.log(err);
    }
  }

}
