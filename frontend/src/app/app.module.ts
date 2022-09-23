import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoPersonalComponent } from './pages/personal/listado-personal/listado-personal.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    ListadoPersonalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
