import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

// Servicios
import { LocalStorageService } from 'src/app/services/localHost/local-host.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardSuperAdmin implements CanActivate {

  constructor(
    private LS: LocalStorageService,
    private router: Router
    ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

      if (this.LS.validarRol() === 'SuperAdmin'){
        return true
      } else {
        this.router.navigateByUrl('/auth/login')
        return false
      }
  }
}
