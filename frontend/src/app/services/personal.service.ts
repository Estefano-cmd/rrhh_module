import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Staff } from '../models/personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  SelectedStaff: any | Staff;
  staff: Staff[] | any;
  private url = 'http://localhost:3000'

  constructor( private http: HttpClient ) {
      this.SelectedStaff = new Staff();
   }

  getPersonal(): Observable<any> {
    return this.http.get(`${this.url}/personal`)
  }

  /* getOnePersonal(apellido: string): Observable<any> {
    return this.http.get(`${this.url}/${apellido}`)
  } */
  
  getOnePersonal(staff: Staff){
    return this.http.get<Staff[]>(`${this.url}/${staff.apellido}`);
  }

  getCargo(): Observable<any>{
    return this.http.get(`${this.url}/personal/cargo`)
  }

  getArea(): Observable<any>{
    return this.http.get(`${this.url}/personal/area`)
  }

  getPro(): Observable<any>{
    return this.http.get(`${this.url}/personal/pro`)
  }

  addStaff(staff: Staff){
    return this.http.post(`${this.url}/personal`, staff)
  }
}
