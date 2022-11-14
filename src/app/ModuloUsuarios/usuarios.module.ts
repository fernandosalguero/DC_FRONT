import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../shared/angular.material.module';
import { DashboardUsuariosComponent } from './dashboard-usuarios.component';
import { NovedadesUsuarioComponent } from './components/novedades-usuario/novedades-usuario.component';
import { ComparadorUsuarioComponent } from './components/comparador-usuario/comparador-usuario.component';
import { UsuarioRoutingModule } from './usuarios.routing';



@NgModule({
  declarations: [
    DashboardUsuariosComponent,
    NovedadesUsuarioComponent,
    ComparadorUsuarioComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    UsuarioRoutingModule
  ]
})
export class UsuariosModule { }
