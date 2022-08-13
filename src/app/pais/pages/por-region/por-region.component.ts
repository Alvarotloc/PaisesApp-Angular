import { Component } from '@angular/core';
import { Pais } from '../../interfaces/por-pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 10px;
      }
    `,
  ],
})
export class PorRegionComponent {
  public regiones: string[] = [
    'america',
    'asia',
    'europe',
    'africa',
    'oceania',
  ];
  public regionActiva: string = '';
  public paises: Pais[] = [];
  public getClaseCss(region: string) {
    return region === this.regionActiva
    ? 'btn btn-primary'
    : 'btn btn-outline-primary';
  }
  constructor(private paisService: PaisService){}
  public activarRegion(region: string) {
    if(region === this.regionActiva) return;
    this.regionActiva = region;
    this.paisService.buscarPais(this.regionActiva,'region').subscribe({
      next: (paises) => {
        this.paises = paises;
      },
      error: (err) => {
        this.paises = [];
      }
    });
  }
  
}
