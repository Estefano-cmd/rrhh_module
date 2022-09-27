import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cuenta } from 'src/app/models/cuentagestion';
import { Staff } from 'src/app/models/personal';
import Swal from 'sweetalert2';

import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'app-cuentagestion',
  templateUrl: './cuentagestion.component.html',
  styleUrls: ['./cuentagestion.component.css']
})
export class CuentagestionComponent implements OnInit {
  contrato: any
  ci: string = ''
  cuenta: any
  total: any

  constructor(public personalService: PersonalService) { }

  ngOnInit(): void {
    this.personalService.getPersonal().subscribe(data => {
      console.log(data)
     this.personalService.staff = data
    })
  }

  searchContrato(form: NgForm){
    console.log(form.value)
    this.personalService.getContrato(form.value).subscribe(
      (res) => {
        this.contrato = res;
        this.contrato = Array.of(this.contrato)
        console.log(res)
      }, err => {
        Swal.fire('Error', 'El personal no tiene un contrato vigente', 'error')
      }
    );
  }

  createCuentaGestion(form: NgForm){
    this.personalService.createCuenta(form.value).subscribe(
      (res) => {
        //this.searchContrato(form);
        this.resetForm(); 
       }
    )
  }

  getCuenta(form: NgForm) {
    this.personalService.getCuenta(this.ci, form.value.fecini, form.value.fecfin).subscribe(
      (res) => {
        this.personalService.cuenta = res
        console.log(res)
      }
    )
  }

  totalCuenta() {

  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.personalService.SelectedCuenta = new Cuenta();
    }
  }

  mostrarData(e: any) {
    console.log(e)
  }
}
