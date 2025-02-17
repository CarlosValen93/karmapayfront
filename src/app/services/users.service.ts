import { inject, Injectable } from '@angular/core';
import { IUser } from '../interface/user.interface';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

type UserBody = { username: string, email: string, password: string, img?: string};
type RegisterResponse = { success: string, user: IUser };
type LoginResponse = { success: string, token: string };

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = `${environment.apiUrl}/users`;
  private httpClient = inject(HttpClient);
  
  constructor() {
  }
  //Esta parte seria ya con el back implementado, pero usando lo de db.db.ts son los de abajo

  getAll(): Promise<IUser[]> {
    return lastValueFrom(
      this.httpClient.get<IUser[]>(this.baseUrl)
    );
  }
  createUser(){

  }
  getById(id: number): Promise<IUser | null> {
    const user = lastValueFrom(
      this.httpClient.get<IUser | null>(`${this.baseUrl}/${id}`)
    );
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }
  getByEmail(name : string): Promise<IUser | null> {
    const user = lastValueFrom(
      this.httpClient.get<IUser | null>(`${this.baseUrl}/${name}`)
    );
    if (!user) {
      throw new Error(`User with name ${name} not found`);
    }
    return user;
  }
  register(body: UserBody) {
    return lastValueFrom(
      this.httpClient.post<RegisterResponse>(`${this.baseUrl}/register`, body)
    );
  }
  login(body: UserBody) {
    return lastValueFrom(
      this.httpClient.post<LoginResponse>(`${this.baseUrl}/login`, body)
    );
  }
  isLogged() {
    if (localStorage.getItem(environment.tokenName)) {
      return true;
    }
    return false;
  }
}
