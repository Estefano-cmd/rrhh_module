import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { PersonalRoutingModule } from './personal-routing.module';
import { ListadoPersonalComponent } from './listado-personal/listado-personal.component';
import { RegistrarPersonalComponent } from './registrar-personal/registrar-personal.component';
import { NavPersonalComponent } from './nav-personal/nav-personal.component';



@NgModule({
  declarations: [
    ListadoPersonalComponent,
    RegistrarPersonalComponent,
    NavPersonalComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    FormsModule
  ]
})
export class PersonalModule { }
