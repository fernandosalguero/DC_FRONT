import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Guardian
import { AuthGuardSuperAdmin } from "../guards/auth/auth.superadmin.guard";

// Componentes
import { DashboardSuperAdminComponent } from "./dashboard-super-admin.component";


const rutasHijasSuperAdmin: Routes = [

{
    path: 'superAdmin',
    component: DashboardSuperAdminComponent,
    // canActivate: [AuthGuardSuperAdmin],
    loadChildren: () => import('./child-routes.module').then( m => m.ChildRoutesModule)
}

];

@NgModule({
    imports: [ RouterModule.forChild(rutasHijasSuperAdmin)],
    exports: [RouterModule],
})

export class SuperAdminRoutingModule {}