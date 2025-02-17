import { Component, inject, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ExpensesService } from '../../services/expenses.service';
import { IExpense } from '../../interface/expense.interface';

@Component({
  selector: 'app-expense',
  imports: [],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
  @Input() idExpense: number=0;
  expensesService=inject(ExpensesService);
  router =inject(Router);
  expense!: IExpense

ngOnInit(){

}

}
