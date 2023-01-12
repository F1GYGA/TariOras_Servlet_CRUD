import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaComponent } from './acasa/acasa.component';
import { DetaliiOrasComponent } from './detalii-oras/detalii-oras.component';
import { DetaliiTaraComponent } from './detalii-tara/detalii-tara.component';
import { ListaOraseComponent } from './lista-orase/lista-orase.component';
import { ListaTariComponent } from './lista-tari/lista-tari.component';
import { AdaugaTaraComponent } from './adauga-tara/adauga-tara.component';


const routes: Routes = [
  {path: 'acasa', component: AcasaComponent},
  {path: 'lista_tari', component: ListaTariComponent},
  {path: 'lista_orase', component: ListaOraseComponent},
  {path: 'detalii_tara/:id', component: DetaliiTaraComponent},
  {path: 'detalii_oras:/id', component: DetaliiOrasComponent},
  {path: 'adauga_tara', component: AdaugaTaraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
