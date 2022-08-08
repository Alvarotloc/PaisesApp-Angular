import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/por-pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  public buscarPais(termino:string):Observable<Pais[]>{
    const url:string = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Pais[]>(url);
  }

}
