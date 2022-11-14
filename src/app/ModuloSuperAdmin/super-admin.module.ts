import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { SuperAdminRoutingModule } from './superAdmin.routes';
import { AngularMaterialModule } from '../shared/angular.material.module';

//Component
import { MonitorUsuarioComponent } from './components/monitor-usuario/monitor-usuario.component';
import { DashboardSuperAdminComponent } from './dashboard-super-admin.component';
import { MonitorComerciosComponent } from './components/monitor-comercios/monitor-comercios.component';
import { MaillandingComponent } from './components/maillanding/maillanding.component';
import { KPISuperAdminComponent } from './components/kpisuper-admin/kpisuper-admin.component';


@NgModule({
  declarations: [
    DashboardSuperAdminComponent,
    MonitorUsuarioComponent,
    MonitorComerciosComponent,
    MaillandingComponent,
    KPISuperAdminComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SuperAdminRoutingModule

  ]
})
export class SuperAdminModule { }
