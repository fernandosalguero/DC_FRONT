import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ComparadorUsuarioComponent } from "./components/comparador-usuario/comparador-usuario.component";
import { NovedadesUsuarioComponent } from "./components/novedades-usuario/novedades-usuario.component";

const childRoutes: Routes = [
  { path: 'novedades', component: NovedadesUsuarioComponent },
  { path: 'comparador', component: ComparadorUsuarioComponent},
  { path: '', redirectTo: '/usuario/novedades', pathMatch: 'full'},
]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRouterModule { }
