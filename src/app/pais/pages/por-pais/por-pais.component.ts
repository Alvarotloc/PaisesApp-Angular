import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {
  public termino:string = '';
  public hayError:boolean = false;
  constructor(private paisService: PaisService){}
  public buscar():void{
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (err) => {
        this.hayError = true;
      }
    });
  }
}