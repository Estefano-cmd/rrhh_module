import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private url = 'http://localhost:3000'

  constructor( private http: HttpClient ) { }

  getPersonal(): Observable<any> {
    return this.http.get(`${this.url}/personal`)
  }

  getOnePersonal(apellido: string): Observable<any> {
    return this.http.get(`${this.url}/${apellido}`)
  }
}
