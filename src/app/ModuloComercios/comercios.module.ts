import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { AngularMaterialModule } from '../shared/angular.material.module';

//Componentes
import { DashboardComerciosComponent } from './dashboard-comercios.component';
import { ReportesComerciosComponent } from './components/reportes-comercios/reportes-comercios.component';
import { PromosComerciosComponent } from './components/promos-comercios/promos-comercios.component';
import { ComerciosRoutingModule } from './comercios.routes';



@NgModule({
  declarations: [
    DashboardComerciosComponent,
    ReportesComerciosComponent,
    PromosComerciosComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ComerciosRoutingModule

  ]
})
export class ComerciosModule { }
