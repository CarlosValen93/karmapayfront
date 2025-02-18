import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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

  getAll() {
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
      this.httpClient.get<ITeam | null>(`${this.baseUrl}/${id}`)
    ).then(team => {
      if (!team) {
        throw new Error(`ID ${id} no encontrado`);
      }
      return team;
    }).catch(error => {
      throw new Error(`Error al obtener el equipo: ${error.message}`);
    });
  }

  updateById(id: number, body: Partial<UserBody>): Promise<ITeam> {
    if (Object.keys(body).length === 0) {
      return Promise.reject(new Error("No has actualizado ningún campo"));
    }

    return firstValueFrom(
      this.httpClient.put<ITeam>(`${this.baseUrl}/update/${id}`, body)
    ).catch(error => {
      throw new Error(`Error al actualizar el equipo con ID ${id}: ${error.message}`);
    });
  }


  createTeam(body: UserBody) {
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
