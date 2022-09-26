import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cuenta } from 'src/app/models/cuentagestion';
import { Staff } from 'src/app/models/personal';

import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'app-cuentagestion',
  templateUrl: './cuentagestion.component.html',
  styleUrls: ['./cuentagestion.component.css']
})
export class CuentagestionComponent implements OnInit {
  contrato: any

  constructor(public personalService: PersonalService) { }

  ngOnInit(): void {
  }

  searchContrato(form: NgForm){
    this.personalService.getContrato(form.value).subscribe(
      (res) => {
        this.contrato = res;
        this.contrato = Array.of(this.contrato)
        console.log(res)
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

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.personalService.SelectedCuenta = new Cuenta();
    }
  }
}
