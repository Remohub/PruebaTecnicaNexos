import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getPaciente(pacienteId: string): Observable<IPaciente> {
    return this.http.get<IPaciente>(this.apiURL + '/' + pacienteId);
  }

  createPaciente(paciente: IPaciente): Observable<IPaciente> {
  return this.http.post<IPaciente>(this.apiURL, paciente);
}

  updatePaciente(paciente: IPaciente): Observable<IPaciente> {
    return this.http.put<IPaciente>(this.apiURL + "/" + paciente.id.toString(), paciente);
  }



}
