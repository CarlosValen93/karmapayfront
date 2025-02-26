import { inject, Injectable } from '@angular/core';
import { IExpense } from '../interface/expense.interface';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { CustomPayload } from '../guards/auth.guard';

type ExpenseBody = { name: string, amount: number, teamId: number, assignations: any[] };
export type ExpenseResponse = {
  Amount: number, CreationDate: string, Creator: string, Id: number, Name: string, Team: string, UserIDCreator: number
}


@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private baseUrl = `${environment.apiUrl}/api/expenses`;
  private httpClient = inject(HttpClient);
  constructor() { }

  getAll(): Promise<IExpense[]> {
    return lastValueFrom(
      this.httpClient.get<IExpense[]>(this.baseUrl)
    );
  }

  getById(id: number): Promise<ExpenseResponse | null> {
    const expense = lastValueFrom(
      this.httpClient.get<ExpenseResponse | null>(`${this.baseUrl}/${id}`)
    );
    if (!expense) {
      throw new Error(`Expense with id ${id} not found`);
    }
    return expense;
  }

  getByName(name: string, teamid: number): Promise<IExpense[]> {
    const result = lastValueFrom(
      this.httpClient.get<IExpense[]>(`${this.baseUrl}/name/${name}/${teamid}`)
    );
    return result


  }

  getDebtByUserTeam(teamId: number, userId: number): Promise<any> {
    const result = lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}/getDebt/${teamId}/${userId}`)
    );
    return result
  }

  getAssig(teamId: number): Promise<any> {
    const result = lastValueFrom(this.httpClient.get<any>(`${this.baseUrl}/getAssig/${teamId}`)
    );
    return result
  }

  add(body: ExpenseBody): Promise<IExpense> {

    return lastValueFrom(
      this.httpClient.post<IExpense>(`${this.baseUrl}/create`, body)
    );
  }



  deleteExpense(id: number) {
    return firstValueFrom(
      this.httpClient.delete(`${this.baseUrl}/${id}`)
    );
  }


  update(id: number, body: Partial<ExpenseBody>): Promise<IExpense> {
    if (Object.keys(body).length === 0) {
      return Promise.reject(new Error("No has actualizado ningún campo"));
    }
    return lastValueFrom(
      this.httpClient.put<IExpense>(`${this.baseUrl}/${id}`, body)
    );
  }
  getbyIdGroup(id: number): Promise<IExpense[]> {
    return lastValueFrom(
      this.httpClient.get<IExpense[]>(`${this.baseUrl}/team/${id}`)
    );
  }

  isCreator(id: number) {
    const token = localStorage.getItem(environment.tokenName)!;
    const payload = jwtDecode<CustomPayload>(token);
    if (payload.userId !== id) {
      return false;
    }
    return true;
  }
}
