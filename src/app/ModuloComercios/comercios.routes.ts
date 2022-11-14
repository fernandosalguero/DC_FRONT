import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComerciosComponent } from "./auth/login-comercios/login-comercios.component";
import { RegistroComerciosComponent } from "./auth/registro-comercios/registro-comercios.component";

//Guardian


// Componentes
import { DashboardComerciosComponent } from "./dashboard-comercios.component";


const rutasHijasComercios: Routes = [

    {
        path: 'authcomer',
        children: [
            {path: 'login', component: LoginComerciosComponent},
            {path: 'register', component: RegistroComerciosComponent}
        ]
    },
    {
        path: 'comercios',
        component: DashboardComerciosComponent,
        canActivate: [],
        loadChildren: () => import('./child-routes.module').then(m => m.ChildRoutesModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(rutasHijasComercios)],
    exports: [RouterModule],
})

export class ComerciosRoutingModule { }