import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PersonalService } from 'src/app/services/personal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-personal',
  templateUrl: './nav-personal.component.html',
  styleUrls: ['./nav-personal.component.css']
})
export class NavPersonalComponent implements OnInit {

  constructor( public personalService: PersonalService ) { }

  ngOnInit(): void {
  }

  searchStaff(form: NgForm){
    if(form.value.apellido == '') {
      alert('sin datos')
    } else {
      this.personalService.getPersonalByLastName(form.value).subscribe(
        (res) => {
          this.personalService.staff = res;
          console.log(res)
        }, (err) => {
          Swal.fire('Error', 'Personal no encontrado', 'error')
        }
      );
    }
  }

}
