import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


import { Tara } from './tara';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TaraService {

  private getTariURL: string = '/tariorasjson/getlistatari';
  private getTaraByIdURL: string = '/tariorasjson/gettarabyid';
  private updateTaraURL: string = '/tariorasjson/actualizaretara';
  private addTaraURL: string = '/tariorasjson/adaugaretara';
  private deleteTaraURL: string = '/tariorasjson/stergeretarabyID';

  constructor(private http: HttpClient) { }

  getTari(): Observable<Tara[]> {
    return this.http.get<Tara[]>(this.getTariURL).pipe(
      catchError(this.handleError('getTari', []))
    );
  }

  getTara(id: number): Observable<Tara> {
    const url = `${this.getTaraByIdURL}/${id}`;
    return this.http.get<Tara>(url);
  }

  addTara(tara: Tara): Observable<any> {
    return this.http.post(this.addTaraURL, tara, httpOptions);

  }

  deleteTara(id: number): Observable<Tara> {
    const url = `${this.deleteTaraURL}/${id}`;
    return this.http.delete<Tara>(url, httpOptions);
  }

  updateTara(tara: Tara): Observable<any> {
      return this.http.put(this.updateTaraURL, tara, httpOptions);
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error:any): Observable<T> =>{
      console.log(`${operation} a esuat cu mesajul: ${error.message}`);
      throw error;
      return of(result as T);
    }
  }
}
