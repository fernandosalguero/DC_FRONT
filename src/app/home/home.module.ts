import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//Modulos
import { AngularMaterialModule } from '../shared/angular.material.module';
import { AuthModule } from '../auth/auth.module';

//Componentes
import { HomeComponent } from './home.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';

//Interceptores
import { SpinnerInterceptor } from '../interceptors/spinner.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Otros
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

//IMG animada
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    HomeComponent,
    HomeFooterComponent,
    HomeNavbarComponent
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AuthModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  exports: [
    HomeFooterComponent,
    HomeNavbarComponent,
    HomeComponent
  ]
})
export class HomeModule { }
