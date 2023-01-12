import { Component, OnInit } from '@angular/core';

import { Oras } from '../oras';
import { OrasService } from '../oras.service';

@Component({
  selector: 'app-lista-orase',
  templateUrl: './lista-orase.component.html',
  styleUrls: ['./lista-orase.component.css']
})
export class ListaOraseComponent implements OnInit {

  orase: Oras[];

  constructor(private orasService: OrasService) { }

  ngOnInit(): void {
    
  }
  
}
