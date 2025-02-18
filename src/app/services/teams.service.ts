import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { ITeam } from '../interface/team.interface';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment.development';
type UserBody = { name?: string, description: string, category: string, image: string };

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


  deleteTeam(id: number) {
    return firstValueFrom(
      this.httpClient.delete(`${this.baseUrl}/${id}`)
    );
  }
}
