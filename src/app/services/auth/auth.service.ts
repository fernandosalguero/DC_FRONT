import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

 
  crearUsuario(frmRegister: any) {
    // console.log('estamos conectados al servicio - register');
    return this.http.post(`${ base_url}/auth/registro`, frmRegister);
  }
  
  loginUsuario(frmlogin: any){
    // console.log('estamos conectados al servicio - login');
      return this.http.post(`${ base_url}/auth/login`, frmlogin);
  }

  }
