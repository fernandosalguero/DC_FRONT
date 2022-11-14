import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) { }


  suscribeBoletinNoticias(emailCtrl: any){ 
    console.log('estamos conectados al servicio - BOLETIN DE NOTICIAS');
      return this.http.post(`${ base_url}/landing`, emailCtrl);
  }
  
  }
