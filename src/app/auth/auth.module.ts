//Modulos
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular.material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



// Spinner
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from '../interceptors/spinner.interceptor';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }],
  exports: [],
})
export class AuthModule { }
