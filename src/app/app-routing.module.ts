import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import { TerminosComponent } from './shared/terminos/terminos.component';
import { StorageComponent } from './shared/storage/storage.component';

//Modulos
import { AuthRoutingModule } from './auth/auth.routing';
import { UsuarioRoutingModule } from './ModuloUsuarios/usuarios.routing';
import { SuperAdminRoutingModule } from './ModuloSuperAdmin/superAdmin.routes';
import { ComerciosRoutingModule } from './ModuloComercios/comercios.routes';


const rutasPadre: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'contrato', component: TerminosComponent
  },
  {
    path: 'storage', component: StorageComponent
  },
  {
    path: '**', component: NoPageFoundComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(rutasPadre),
    AuthRoutingModule,
    UsuarioRoutingModule,
    SuperAdminRoutingModule,
    ComerciosRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
