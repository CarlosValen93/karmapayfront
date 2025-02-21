import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { category, ITeam } from '../interface/team.interface';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment.development';
import { jwtDecode } from 'jwt-decode';
import { CustomPayload } from '../guards/auth.guard';
type TeamBody = { name: string, description: string, category: string, img: string };

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

  updateById(id: number, body: Partial<TeamBody>): Promise<ITeam> {
    if (Object.keys(body).length === 0) {
      return Promise.reject(new Error("No has actualizado ningún campo"));
    }

    return firstValueFrom(
      this.httpClient.put<ITeam>(`${this.baseUrl}/update/${id}`, body)
    ).catch(error => {
      throw new Error(`Error al actualizar el equipo con ID ${id}: ${error.message}`);
    });
  }


  add(body: TeamBody) {
    return firstValueFrom(
      this.httpClient.post<ITeam>(`${this.baseUrl}/create`, body)
    )

  }


  deleteTeam(id: number) {
    return firstValueFrom(
      this.httpClient.delete(`${this.baseUrl}/${id}`)
    );
  }

  getAllCategories(): string[] {
    const categories: string[] = Object.values(category);
    return categories;
  }

  getByCategory(category: category) {
    return firstValueFrom(
      this.httpClient.get<ITeam[]>(`${this.baseUrl}/category/${category}`)
    )
  }
  getOwner(id: number) : Promise<number> {
    return firstValueFrom(
      this.httpClient.get<number>(`${this.baseUrl}/owner/${id}`)
    )
  }
  async isOwner(id: number) {
    const token = localStorage.getItem(environment.tokenName);
    const payload = jwtDecode<CustomPayload>(token!);
    const idOwner = await this.getOwner(id);
    if (payload.userId !== idOwner) {
      return false;
    }
    return true;
  }
}
