import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListadoPersonalComponent } from './pages/personal/listado-personal/listado-personal.component';
import { CuentagestionComponent } from  './pages/cuentagestion/cuentagestion.component'

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full'
  },
  { 
    path: 'personal', 
    loadChildren: () => import('./pages/personal/personal.module').then(m => m.PersonalModule)
  },
  { path: 'pagos', component: CuentagestionComponent },
  { path: 'solicitudes',
    loadChildren: () => import('./pages/solicitudes/solicitudes.module').then(m => m.SolicitudesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
