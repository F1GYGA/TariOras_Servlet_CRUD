import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Tara } from '../tara';
import { TaraService } from '../tara.service';


@Component({
  selector: 'app-detalii-tara',
  templateUrl: './detalii-tara.component.html',
  styleUrls: ['./detalii-tara.component.css']
})
export class DetaliiTaraComponent implements OnInit {

  tara: Tara;
  constructor(
    private route: ActivatedRoute,
    private taraService: TaraService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTara();
  }
  getTara(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taraService.getTara(id).subscribe(tara => this.tara = tara);
  }

  updateTara(tara: Tara):void{
    this.taraService.updateTara(this.tara).subscribe(()=>this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}
