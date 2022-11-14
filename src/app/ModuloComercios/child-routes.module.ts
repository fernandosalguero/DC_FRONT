import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromosComerciosComponent } from './components/promos-comercios/promos-comercios.component';
import { ReportesComerciosComponent } from './components/reportes-comercios/reportes-comercios.component';

//Componentes



const childRoutes: Routes = [
  { path: 'reportes', component: ReportesComerciosComponent },
  { path: 'promos', component: PromosComerciosComponent },
  { path: '', redirectTo: '/comercios/reportes', pathMatch: 'full'},
]


@NgModule({
  imports: [ RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesModule { }