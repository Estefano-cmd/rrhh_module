import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Staff } from 'src/app/models/personal';

import Swal from 'sweetalert2';

import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-registrar-personal',
  templateUrl: './registrar-personal.component.html',
  styleUrls: ['./registrar-personal.component.css']
})
export class RegistrarPersonalComponent implements OnInit {
  area: any
  cargo: any
  profesion: any

  constructor( public personalService: PersonalService ) { }

  ngOnInit(): void {

    this.personalService.getArea().subscribe(
      (res) => this.area = res
     )
     this.personalService.getCargo().subscribe(
      (res) => this.cargo = res
     )
     this.personalService.getPro().subscribe(
      (res) => this.profesion = res
     )

  }

  searchStaff(form: NgForm){
    this.personalService.getOnePersonal(form.value).subscribe(
      (res) => {
        this.personalService.staff = res;
        this.personalService.staff = Array.of(this.personalService.staff)
        console.log(res)
      }
    );
  }
  
  searchStaffAdd(form: NgForm){
    this.personalService.getOnePersonal(form.value).subscribe(
      (res) => {
        this.personalService.staff = res;
        this.personalService.staff = Array.of(this.personalService.staff)
        console.log(res)
        return true
      }
    );
    return false
  }
  
  addStaff(form: NgForm){
    this.personalService.addStaff(form.value).subscribe(
      (res) => {
       if(this.searchStaffAdd(form)){
        alert('error')
       } else {
         Swal.fire({
          text: 'Personal registrado correctamente',
          icon: 'success',
          showConfirmButton: true,
          confirmButtonText: 'Ok'
         }).then(r => {
          if(r.value) {
            this.resetForm();  
          }
         })
       }
      }
      )
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.personalService.SelectedStaff = new Staff();
    }
  }

}
