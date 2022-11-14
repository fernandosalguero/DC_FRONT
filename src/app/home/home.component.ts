import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import { LandingService } from '../services/landing/landing.service';
import { NotificacionesLandingService } from '../services/notificaciones/notificaciones-landing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 //IMG con movimiento
 options: AnimationOptions = {
  path: '../../assets/img_json/logo.landing.json'
}

  constructor(
    private landingService: LandingService,
    private swal: NotificacionesLandingService
  ) { }

  public usuario: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email])
  })

  ngOnInit(): void {
  }

  SaveData(){
    // console.warn(this.usuario.value);
    this.landingService.suscribeBoletinNoticias(this.usuario.value)
    .subscribe(resp => {
      this.swal.suscripcionBoletinOK()
      // console.log(resp);
    }, (err) => this.swal.suscripcionBoletinFail()
    )
  
    //formateamos formulario
    this.usuario.reset()
  }

}
