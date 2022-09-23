import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListadoPersonalComponent } from './pages/personal/listado-personal/listado-personal.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'personal', component: ListadoPersonalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
