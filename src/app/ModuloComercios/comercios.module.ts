import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { AngularMaterialModule } from '../shared/angular.material.module';
import { ComerciosRoutingModule } from './comercios.routes';

//Componentes
import { DashboardComerciosComponent } from './dashboard-comercios.component';

import { ReportesComerciosComponent } from './components/reportes-comercios/reportes-comercios.component';
import { PromosComerciosComponent } from './components/promos-comercios/promos-comercios.component';
import { CatalogoComerciosComponent } from './components/catalogo-comercios/catalogo-comercios.component';



@NgModule({
  declarations: [
    DashboardComerciosComponent,
    ReportesComerciosComponent,
    PromosComerciosComponent,
    CatalogoComerciosComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ComerciosRoutingModule

  ]
})
export class ComerciosModule { }
