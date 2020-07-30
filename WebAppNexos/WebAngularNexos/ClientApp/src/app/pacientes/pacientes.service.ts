import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPaciente } from './paciente';


@Injectable()
export class PacientesService {

  //private apiURL = this.baseUrl + "/Paciente";
  private apiURL = this.baseUrl + "/pacientes";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getPacientes(): Observable<IPaciente[]> {
    return this.http.get<IPaciente[]>(this.apiURL);
  }

}
