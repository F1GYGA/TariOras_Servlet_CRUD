import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Oras } from '../oras';
import { OrasService } from '../oras.service';

@Component({
  selector: 'app-detalii-oras',
  templateUrl: './detalii-oras.component.html',
  styleUrls: ['./detalii-oras.component.css']
})

export class DetaliiOrasComponent implements OnInit {

  oras: Oras;

  constructor(
    //private route: ActivatedRoute,
    //private orasService: OrasService,
   // private location: Location
  ){}


  ngOnInit(): void {
    //this.getOras();
  }
  getOras():void{
    //const id = +this.route.snapshot.paramMap.get('id');
   //this.orasService.getOras(id).subscribe(oras => this.oras = oras)
  }
  
  goBack(): void{
   // this.location.back();
  }

}
