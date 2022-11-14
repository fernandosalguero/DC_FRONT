import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


// modulos
import { AngularMaterialModule } from './shared/angular.material.module';
import { HomeModule } from './home/home.module';
import { UsuariosModule } from './ModuloUsuarios/usuarios.module';
import { SuperAdminModule } from './ModuloSuperAdmin/super-admin.module';



//components
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { TerminosComponent } from './shared/terminos/terminos.component';

//Otros
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { StorageComponent } from './shared/storage/storage.component';
import { ComerciosModule } from './ModuloComercios/comercios.module';



export function playerFactory() {
  return player
}
@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent,
    SpinnerComponent,
    TerminosComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // rutas padre
    BrowserAnimationsModule,
    AngularMaterialModule,
    LottieModule.forRoot({ player: playerFactory }),
    ReactiveFormsModule,
  //Modulos Propios    
    HomeModule,
    UsuariosModule,
    SuperAdminModule,
    ComerciosModule


  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
