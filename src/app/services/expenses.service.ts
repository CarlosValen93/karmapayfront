import { inject, Injectable } from '@angular/core';
import { IExpense } from '../interface/expense.interface';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

type ExpenseBody = { name:string, amount: number};

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
//     private expenselist: IExpense[] = EXPENSES;
//   constructor() {

//    }
//   getAll(): IExpense[] {
//     return this.expenselist;
// }
// getbyID(id: number): IExpense {
//     const expense = this.expenselist.find(expense => expense.Id === id);
//     if (!expense) {
//         throw new Error(`Expense with id ${id} not found`);
//     }
//     return expense;
// }
// add(expense: IExpense): void {
//     this.expenselist.push(expense);
// }
private baseUrl = `${environment.apiUrl}/expenses`;
private httpClient = inject(HttpClient);
constructor() { }

getAll(): Promise<IExpense[]> {
     return lastValueFrom(
       this.httpClient.get<IExpense[]>(this.baseUrl)
     );
   }
   getById(id: number): Promise<IExpense | null> {
     const expense = lastValueFrom(
       this.httpClient.get<IExpense | null>(`${this.baseUrl}/${id}`)
     );
     if (!expense) {
       throw new Error(`Expense with id ${id} not found`);
     }
     return expense;
   }
   getByName(name : string): Promise<IExpense | null> {
       return lastValueFrom(
         this.httpClient.get<IExpense | null>(`${this.baseUrl}/${name}`)
       );
  }
  add(body: ExpenseBody): Promise<IExpense> {
    return lastValueFrom(
      this.httpClient.post<IExpense>(`${this.baseUrl}/add`, body)
    );
  }
  delete(id: number): Promise<void> {
    return lastValueFrom(
      this.httpClient.delete<void>(`${this.baseUrl}/delete/${id}`)
    );
  }
}
