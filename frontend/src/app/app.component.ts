import { Component, OnInit } from '@angular/core';
import { PersonalService } from "./services/personal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recursos Humanos';
  personal: any

  constructor( public personalService: PersonalService) {}

  ngOnInit(): void {
      this.personalService.getPersonal().subscribe(data => {
        console.log(data)
        this.personal = data
      })
  }
  
}
