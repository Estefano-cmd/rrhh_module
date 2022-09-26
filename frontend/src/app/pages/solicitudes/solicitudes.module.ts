import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { DescuentosComponent } from './descuentos/descuentos.component';
import { BonosComponent } from './bonos/bonos.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { NavSolicitudesComponent } from './nav-solicitudes/nav-solicitudes.component';
import { AnticiposComponent } from './anticipos/anticipos.component';


@NgModule({
  declarations: [
    AnticiposComponent,
    DescuentosComponent,
    BonosComponent,
    CuentasComponent,
    NavSolicitudesComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }
