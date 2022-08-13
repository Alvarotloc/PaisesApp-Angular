import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/por-pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  public buscarPais(termino: string, metodo: string): Observable<Pais[]> {
    const DICCIONARIO_METODOS = {
      nombre: `${this.apiUrl}/name/${termino}`,
      capital: `${this.apiUrl}/capital/${termino}`,
      region: `${this.apiUrl}/region/${termino}`,
    };
    const url: string =
      DICCIONARIO_METODOS[metodo as keyof typeof DICCIONARIO_METODOS];
    return this.http.get<Pais[]>(url);
  }
  public getPaisPorCodigo(codigo: string): Observable<Pais> {
    const url: string = `${this.apiUrl}/alpha/${codigo}`;
    return this.http.get<Pais>(url);
  }
}
