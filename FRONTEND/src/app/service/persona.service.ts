import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';




@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL= 'https://backendignag.herokuapp.com/personas/';
  
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.URL+ 'traer/perfil');
  }

  public editarPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.URL+"editar/"+persona.id, persona);
  }
}


