import { IExpense } from './../../interface/expense.interface';
import { Component, inject, Input } from '@angular/core';
import { ExpenseCardComponent } from '../expense-card/expense-card.component';
import { ExpenseSearchComponent } from '../expense-search/expense-search.component';
import { ExpensesService } from '../../services/expenses.service';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-expense-list',
  imports: [ExpenseCardComponent, ExpenseSearchComponent, RouterLink, ButtonComponent],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css'
})
export class ExpenseListComponent {
  arrExpenses: IExpense[] = [];
  expensesServices = inject(ExpensesService);
  @Input() idTeam: number = 0;
  gastoTotal: number = 0;


  async ngOnInit() {
    
    try {
      let expenses: IExpense[] = await this.expensesServices.getbyIdGroup(this.idTeam)
      this.arrExpenses = expenses;
      console.log('Contenido de arrExpenses:', this.arrExpenses);
    } catch (err) {
      console.log(err);
    }
    this.calcularGastoTotal();
  }

  async searchByName(event: string) {
    try {
      if (event) {
        const result = await this.expensesServices.getByName(event, this.idTeam);
        this.arrExpenses = result
      } else {
        let expenses: IExpense[] = await this.expensesServices.getbyIdGroup(this.idTeam)
        this.arrExpenses = expenses;
      }
    } catch (err) {
      console.log(err);
    }
  }
  calcularGastoTotal() {
    this.gastoTotal = this.arrExpenses
      .map(expense => Number(expense.Amount))
      .reduce((total, value) => total + value, 0);
     

  }
  
  
  

}
