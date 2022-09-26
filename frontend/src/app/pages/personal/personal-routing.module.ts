import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPersonalComponent } from './listado-personal/listado-personal.component';
import { RegistrarPersonalComponent } from './registrar-personal/registrar-personal.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado-personal',
        component: ListadoPersonalComponent
      },
      {
        path: 'registro-personal',
        component: RegistrarPersonalComponent
      },
      {
        path: '**',
        redirectTo: 'listado-personal'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
