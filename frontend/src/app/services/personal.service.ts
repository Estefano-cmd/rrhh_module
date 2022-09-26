import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Staff } from '../models/personal';
import { Contrato } from '../models/contrato';
import { Cuenta } from '../models/cuentagestion';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  SelectedStaff: any | Staff;
  staff: Staff[] | any;
  SelectedContrato: any | Contrato;
  contrato: Contrato[] | any;
  SelectedCuenta: any | Cuenta;
  cuenta: Cuenta[] | any;
  
  private url = 'http://localhost:3000'

  constructor( private http: HttpClient ) {
      this.SelectedStaff = new Staff();
      this.SelectedContrato = new Contrato();
      this.SelectedCuenta = new Cuenta();
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
  
  getPersonalByLastName(staff: Staff){
    return this.http.get<Staff[]>(`${this.url}/personal/${staff.apellido}`);
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

  getContrato(staff: Staff){
    return this.http.get<Staff[]>(`${this.url}/contrato/${staff.ci}`);
  }

  createCuenta(cuenta: Cuenta){
    return this.http.post(`${this.url}/cuenta`, cuenta);
  }

  getCuenta(staff: Staff) {
    // return this.http.get()
  }
}
