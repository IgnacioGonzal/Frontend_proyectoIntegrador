import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skillsURL = 'https://backendignag.herokuapp.com/skills/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.skillsURL + 'lista');
  }

  public listaPorId(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(`${this.skillsURL}traer/${id}`);
  }

  public detail(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.skillsURL + `detail/${id}`);
  }

  public save(proyectos: Skills): Observable<Skills> {
    return this.httpClient.post<any>(this.skillsURL + 'create', proyectos);
  }

  public update(id: number, proyectos: Skills): Observable<any> {
    return this.httpClient.put<any>(this.skillsURL + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skillsURL + `delete/${id}`);
  }



}
