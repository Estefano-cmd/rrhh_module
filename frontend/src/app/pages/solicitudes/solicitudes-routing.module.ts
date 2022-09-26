import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnticiposComponent } from './anticipos/anticipos.component';
import { BonosComponent } from './bonos/bonos.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { DescuentosComponent } from './descuentos/descuentos.component';
import { NavSolicitudesComponent } from './nav-solicitudes/nav-solicitudes.component';

const routes: Routes = [
  {
    path: '',
    component: NavSolicitudesComponent,
    children: [
      {
        path: 'cuentas',
        component: CuentasComponent
      },
      {
        path: 'anticipos',
        component: AnticiposComponent
      },
      {
        path: 'bonos',
        component: BonosComponent
      },
      {
        path: 'descuentos',
        component: DescuentosComponent
      },
      {
        path: '**',
        redirectTo: 'cuentas'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
