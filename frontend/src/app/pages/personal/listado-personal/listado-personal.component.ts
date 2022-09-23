import { Component, OnInit } from '@angular/core';

import { PersonalService } from 'src/app/services/personal.service';

@Component({
  selector: 'app-listado-personal',
  templateUrl: './listado-personal.component.html',
  styleUrls: ['./listado-personal.component.css']
})
export class ListadoPersonalComponent implements OnInit {
  personal: any
  apellido: string = ''

  constructor( public personalService: PersonalService ) { }

  ngOnInit(): void {
    this.personalService.getPersonal().subscribe(data => {
      console.log(data)
     this.personal = data
    })

    this.personalService.getOnePersonal(this.apellido).subscribe(data => {
      console.log(data)
     })
  }

}
