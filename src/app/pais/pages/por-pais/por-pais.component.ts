import { Component } from '@angular/core';
import { Pais } from '../../interfaces/por-pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  public termino:string = '';
  public hayError:boolean = false;
  public paises: Pais[] = [];
  constructor(private paisService: PaisService){}
  public buscar():void{
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    });
  }
}