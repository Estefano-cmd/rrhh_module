import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListadoPersonalComponent } from './pages/personal/listado-personal/listado-personal.component';
import { CuentagestionComponent } from  './pages/cuentagestion/cuentagestion.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'personal', component: ListadoPersonalComponent},
  { path: 'pagos', component: CuentagestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
