import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ReportesComerciosComponent } from './components/reportes-comercios/reportes-comercios.component';
import { PromosComerciosComponent } from './components/promos-comercios/promos-comercios.component';
import { CatalogoComerciosComponent } from './components/catalogo-comercios/catalogo-comercios.component';



const childRoutes: Routes = [
  { path: 'reportes', component: ReportesComerciosComponent },
  { path: 'promos', component: PromosComerciosComponent },
  { path: 'catalogo', component: CatalogoComerciosComponent },
  { path: '', redirectTo: '/comercios/reportes', pathMatch: 'full'},
]


@NgModule({
  imports: [ RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesModule { }