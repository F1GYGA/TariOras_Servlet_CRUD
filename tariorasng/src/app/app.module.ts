import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcasaComponent } from './acasa/acasa.component';
import { ListaTariComponent } from './lista-tari/lista-tari.component';
import { ListaOraseComponent } from './lista-orase/lista-orase.component';
import { DetaliiTaraComponent } from './detalii-tara/detalii-tara.component';
import { FormsModule } from '@angular/forms';
import { DetaliiOrasComponent } from './detalii-oras/detalii-oras.component';
import { AdaugaTaraComponent } from './adauga-tara/adauga-tara.component';


@NgModule({
  declarations: [
    AppComponent,
    AcasaComponent,
    ListaTariComponent,
    ListaOraseComponent,
    DetaliiTaraComponent,
    DetaliiOrasComponent,
    AdaugaTaraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
