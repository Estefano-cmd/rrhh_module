import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Staff } from 'src/app/models/personal';

import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-listado-personal',
  templateUrl: './listado-personal.component.html',
  styleUrls: ['./listado-personal.component.css']
})
export class ListadoPersonalComponent implements OnInit {
  area: any
  cargo: any
  profesion: any

  constructor( public personalService: PersonalService ) { }

  ngOnInit(): void {
    this.personalService.getPersonal().subscribe(data => {
      console.log(data)
     this.personalService.staff = data
    })

    /* this.personalService.getOnePersonal(this.apellido).subscribe(data => {
      console.log(data)
     }) */

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

  // searchStaff(form: NgForm){
  //   this.personalService.getOnePersonal(form.value).subscribe(
  //     (res) => {
  //       this.personalService.staff = res;
  //       this.personalService.staff = Array.of(this.personalService.staff)
  //       console.log(res)
  //     }
  //   );
  // }

  // addStaff(form: NgForm){
  //   this.personalService.addStaff(form.value).subscribe(
  //     (res) => {
  //      this.searchStaff(form);
  //      this.resetForm(); 
  //     }
  //   )
  // }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.personalService.SelectedStaff = new Staff();
    }
  }

}
