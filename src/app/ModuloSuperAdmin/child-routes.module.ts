import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { KPISuperAdminComponent } from "./components/kpisuper-admin/kpisuper-admin.component";
import { MaillandingComponent } from "./components/maillanding/maillanding.component";
import { MonitorComerciosComponent } from "./components/monitor-comercios/monitor-comercios.component";
import { MonitorUsuarioComponent } from "./components/monitor-usuario/monitor-usuario.component";


const childRoutes: Routes = [
  { path: 'moniuser', component: MonitorUsuarioComponent },
  { path: 'monicomer', component:MonitorComerciosComponent },
  { path: 'mailLanding', component: MaillandingComponent },
  { path: 'kpi', component: KPISuperAdminComponent },
  { path: '', redirectTo: '/superAdmin/kpi', pathMatch: 'full'},
]


@NgModule({
  imports: [ RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class ChildRoutesModule { }
