import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDoctor } from './doctor';

@Injectable()
export class DoctorsService {

  private apiURL = this.baseUrl + "/doctors";
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getDoctors(): Observable<IDoctor[]> {
    return this.http.get<IDoctor[]>(this.apiURL);
  }
}
