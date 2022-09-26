import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ListadoPersonalComponent } from './listado-personal/listado-personal.component';
import { NavPersonalComponent } from './nav-personal/nav-personal.component';
import { RegistrarPersonalComponent } from './registrar-personal/registrar-personal.component';

const routes: Routes = [
  {
    path: '',
    component: NavPersonalComponent,
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
