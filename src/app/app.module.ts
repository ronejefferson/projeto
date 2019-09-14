import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@Angular/forms';
import{HttpClientModule}from '@Angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNavComponent } from './pages/page-nav/page-nav.component';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { ListUsuarioComponent } from './pages/list-usuario/list-usuario.component';
import { AddEventoComponent } from './pages/add-evento/add-evento.component';
import { ListEventoComponent } from './pages/list-evento/list-evento.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNavComponent,
    AddUsuarioComponent,
    ListUsuarioComponent,
    AddEventoComponent,
    ListEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
