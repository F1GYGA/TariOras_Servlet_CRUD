import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


import { Oras } from './oras';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class OrasService {

  private getOraseURL: string = 'tariorasjson/getlistaorase';
  private getOrasByIdURL: string = 'tariorasjson/getorasbyid';
  private deteleOrasURL: string = 'tariorasjson/stergeorasbyID';
  private updateOrasURL: string = 'tariorasjson/actualizareoras';
  private addOrasURL: string = 'tariorasjson/adaugareoras';

  constructor(private http: HttpClient) { }

  getOrase(): Observable<Oras[]> {
    return this.http.get<Oras[]>(this.getOraseURL);
  }

  getOras(id: number): Observable<Oras> {
    const url = `${this.getOrasByIdURL}/${id}`;
    return this.http.get<Oras>(url);
  }

  addOras(oras: Oras): Observable<any> {
    return this.http.post(this.addOrasURL, oras,)
  }

}
