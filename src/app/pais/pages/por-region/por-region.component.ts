import { Component } from '@angular/core';
import { Pais } from '../../interfaces/por-pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
})
export class PorRegionComponent {
  public termino:string = '';
  public hayError:boolean = false;
  public paises: Pais[] = [];
  public placeholder:string = 'Buscar región...';
  constructor(private paisService: PaisService){}
  public buscar(termino:string):void{
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino,'region').subscribe({
      next: (paises) => {
        this.paises = paises;
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    });
  }
  public sugerir(termino:string):void{
    this.hayError = false;
  }
}
