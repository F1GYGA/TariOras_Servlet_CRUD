import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tara } from '../tara';
import { TaraService } from '../tara.service';

@Component({
  selector: 'app-adauga-tara',
  templateUrl: './adauga-tara.component.html',
  styleUrls: ['./adauga-tara.component.css']
})
export class AdaugaTaraComponent implements OnInit {

  tara: Tara = new Tara();
  constructor(
    private router: Router,
    private taraService: TaraService,
  ) { }

  ngOnInit(): void {
  }

  goToList(): void{
    this.router.navigateByUrl("lista_tari");
  }

  adaugaTara(): void{
    this.taraService.addTara(this.tara)
    .subscribe(()=>this.goToList());
  }

}
