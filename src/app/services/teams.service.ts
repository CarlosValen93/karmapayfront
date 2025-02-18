import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { category, ITeam } from '../interface/team.interface';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment.development';
type UserBody = { Name?: string, Description: string, Category: string, Img: string };

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private httpClient = inject(HttpClient)
  private baseUrl = `${environment.apiUrl}/api/teams`;

  getAll(){
    return firstValueFrom(
      this.httpClient.get<ITeam[]>(`${this.baseUrl}`)
    );

}
getByName(name: string) {
  return firstValueFrom(
    this.httpClient.get<ITeam[]>(`${this.baseUrl}/name/${name}`)
  );
}
getById(id: number) {
  return firstValueFrom(
    this.httpClient.get<ITeam | null >(`${this.baseUrl}/${id}`)
  );
}
updateById(id: number, body: UserBody) {
  return firstValueFrom(
    this.httpClient.put<ITeam>(`${this.baseUrl}/update/${id}`, body)
  );
}


  createTeam(body:UserBody){
    return firstValueFrom(
      this.httpClient.post<ITeam>(`${this.baseUrl}/create`, body)
    )

  }

  getAllCategories():string[] {
    const categories:string[] = Object.values(category);
    return categories;
  }
  deleteTeam(id: number) {
    return firstValueFrom(
      this.httpClient.delete(`${this.baseUrl}/${id}`)
    );
  }
}
