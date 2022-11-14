import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { LottieModule } from 'ngx-lottie';

import player from 'lottie-web';
LottieModule.forRoot({ player: playerFactory })

//IMG animada
export function playerFactory(){
  return player;
}

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.scss']
})
export class TerminosComponent {

   //IMG animada
   contrato: AnimationOptions = {
    path: '../../../assets/img_json/contrato.json'
  }
  constructor() { }
}
