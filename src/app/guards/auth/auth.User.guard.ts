import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

//Servicios
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/localHost/local-host.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardUser implements CanActivate {

  constructor(
    private LS: LocalStorageService,
    private router: Router,
    private usuarioService: AuthService
    ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

   
      if (this.LS.validarRol() === 'usuario'){
        return true
      } else {
        this.router.navigateByUrl('/auth/login')
        return false
      }
  }
}


