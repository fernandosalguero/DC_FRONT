import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Guardian
import { AuthGuardUser } from "../guards/auth/auth.User.guard";

// Componente
import { DashboardUsuariosComponent } from "./dashboard-usuarios.component";


const rutasHijasUsuario: Routes = [

{
    path: 'usuario',
    component: DashboardUsuariosComponent,
    canActivate: [AuthGuardUser],
    loadChildren: () => import ('./child-router.module').then(m => m.ChildRouterModule)
    
}

];

@NgModule({
    imports: [ RouterModule.forChild(rutasHijasUsuario)],
    exports: [RouterModule],
})

export class UsuarioRoutingModule {}