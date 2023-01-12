import { Component, OnInit } from '@angular/core';
import { Tara } from '../tara';
import { TaraService } from '../tara.service';

@Component({
  selector: 'app-lista-tari',
  templateUrl: './lista-tari.component.html',
  styleUrls: ['./lista-tari.component.css']
})

export class ListaTariComponent implements OnInit {

  tari: Tara[] = [];
  mesajEroare: string = null;

  constructor(private taraService: TaraService) { }

  ngOnInit() {
    this.getTari();
  }

  getTari(): void {
    this.taraService.getTari()
    .subscribe(
      tari => this.tari = tari,
      err => this.mesajEroare = err.message);
  }

  deleteTara(id: number): void {
    this.taraService.deleteTara(id).subscribe(
      () => (this.tari = this.tari.filter(t => t.id !== id))
    );
  }

}
