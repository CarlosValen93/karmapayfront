import { Injectable } from '@angular/core';
import { IExpense } from '../interface/expense.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
    /*private expenselist: IExpense[] = EXPENSES;
  constructor() {

   }
  getAll(): IExpense[] {
    return this.expenselist;
}
get(id: number): IExpense {
    const expense = this.expenselist.find(expense => expense.Id === id);
    if (!expense) {
        throw new Error(`Expense with id ${id} not found`);
    }
    return expense;
}
add(expense: IExpense): void {
    this.expenselist.push(expense);
}*/
}
