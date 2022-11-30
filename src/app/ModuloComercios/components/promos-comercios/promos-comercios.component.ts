import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { promosComercios } from '../../interfaces/promos_comercios.interface';

@Component({
  selector: 'app-promos-comercios',
  templateUrl: './promos-comercios.component.html',
  styleUrls: ['./promos-comercios.component.scss']
})


export class PromosComerciosComponent {
 
  promos: promosComercios[] = [
    {nombre: 'Navidad', descripcion: 'Esta navidad, hace los mejores sanguches', producto1:'Pan La Española x 100', producto2:'500gr Queso barra',producto3:'500gr salame',fechaInicio: '15/10/22', fechaFin:'22/05/23', precio: 66},
    {nombre: 'Navidad', descripcion: 'Esta navidad, hace los mejores sanguches', producto1:'Pan La Española x 100', producto2:'500gr Queso barra',producto3:'500gr salame',fechaInicio: '15/10/22', fechaFin:'22/05/23', precio: 66},
    {nombre: 'Navidad', descripcion: 'Esta navidad, hace los mejores sanguches', producto1:'Pan La Española x 100', producto2:'500gr Queso barra',producto3:'500gr salame',fechaInicio: '15/10/22', fechaFin:'22/05/23', precio: 66},

  ]

  constructor() {}



}
