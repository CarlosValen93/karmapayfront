import { inject, Injectable } from '@angular/core';
import { IUser } from '../interface/user.interface';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.development';

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
    createUser() {

    }
    getById(id: number): Promise<IUser | null> {
        return lastValueFrom(
            this.httpClient.get<IUser | null>(`${this.baseUrl}/${id}`)
        );
    }
    getByEmail(name: string): Promise<IUser | null> {
        return lastValueFrom(
            this.httpClient.get<IUser | null>(`${this.baseUrl}/${name}`)
        );
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
