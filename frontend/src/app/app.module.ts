import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPersonalComponent } from './pages/personal/listado-personal/listado-personal.component';
import { CuentagestionComponent } from './pages/cuentagestion/cuentagestion.component';
import { RegistrarPersonalComponent } from './pages/personal/registrar-personal/registrar-personal.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ListadoPersonalComponent,
    CuentagestionComponent,
    RegistrarPersonalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
