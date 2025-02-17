import { inject, Injectable } from '@angular/core';
import { IUser } from '../interface/user.interface';
import { USERS } from '../db/db.db';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

type UserBody = { username?: string, email: string, password: string };
type RegisterResponse = { success: string, user: IUser };
type LoginResponse = { success: string, token: string };

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userlist: IUser[] = USERS;
  // private baseUrl = `${environment.apiUrl}/users`;
  // private httpClient = inject(HttpClient);
  
  constructor() {
  }
  //Esta parte seria ya con el back implementado, pero usando lo de db.db.ts son los de abajo

  // getAll(): Promise<IUser[]> {
  //   return lastValueFrom(
  //     this.httpClient.get<IUser[]>(this.baseUrl)
  //   );
  // }
  // createUser(){

  // }
  // getById(id: number): Promise<IUser | null> {
  //   return lastValueFrom(
  //     this.httpClient.get<IUser | null>(`${this.baseUrl}/${id}`)
  //   );
  // }
  // getByEmail(name : string): Promise<IUser | null> {
  //   return lastValueFrom(
  //     this.httpClient.get<IUser | null>(`${this.baseUrl}/${name}`)
  //   );
  // }
  // register(body: UserBody) {
  //   return lastValueFrom(
  //     this.httpClient.post<RegisterResponse>(`${this.baseUrl}/register`, body)
  //   );
  // }
  // login(body: UserBody) {
  //   return lastValueFrom(
  //     this.httpClient.post<LoginResponse>(`${this.baseUrl}/login`, body)
  //   );
  // }
  // isLogged() {
  //   if (localStorage.getItem(environment.tokenName)) {
  //     return true;
  //   }
  //   return false;
  // }
  getAll(): IUser[] {
    return this.userlist;
}
getUserById(id: number): IUser {
    const user = this.userlist.find(user => user.Id === id);
    if (!user) {
        throw new Error(`Post with id ${id} not found`);
    }
    return user;
}
getUserByMail(mail: string): IUser[] {
  const user = this.userlist.filter(user => user.Mail.includes(mail));
  return user;
}
getUserbyName(name: string): IUser[] {
    const user = this.userlist.filter(post => post.Username.includes(name));
    return user;
}
addUser(user: IUser): void {
    this.userlist.push(user);
}
CreateUser(Name:string, mail:string, password:string, image:string,token:string): void {
    const post: IUser = {
        Id: this.userlist.length + 1,
        Username: Name,
        Mail: mail,
        Password: password,
        Img: image,
        Token:token,
        CreationDate: new Date(),
        UpdatedDate: new Date()
    }
    this.addUser(post);
}
DeleteUser(id: number): void {
    const index = this.userlist.findIndex(user => user.Id === id);
    if (index === -1) {
        throw new Error(`Post with id ${id} not found`);
    }
    this.userlist.splice(index, 1);
}
}
