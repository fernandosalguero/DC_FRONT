import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesLandingService {

  constructor() { }

  // REGISTRO
  usuarioCreadoCorrectamente(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Usuario creado Correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    }

    lasContraseñasNoCoinciden(){
      Swal.fire(
        '',
        'Las contraseñas no coinciden',
        'info'
        )
      }
      terms(){
        Swal.fire(
          'Términos',
          'Por favor, acepta nuestros términos',
          'warning'
        )
        }

    // LOGIN
      // cuando un usuario se autentica y puede ingresar a la plataforma 
      bienvenidoUsuario(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Que gusto verte nuevamente!!!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    bienvenidoAdmin(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Que gusto verte nuevamente Fer!!!',
        showConfirmButton: false,
        timer: 1500
      })
    }

    bienvenidoComercio(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Hola Comercio :D',
        showConfirmButton: false,
        timer: 1500
      })
    }
    

    suscripcionBoletinOK(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gracias por suscribirte, pronto recibiras noticias nuestras',
        showConfirmButton: false,
        timer: 1500
      })
    }

    suscripcionBoletinFail(){
      Swal.fire(
        'Upps',
        'Este correo ya esta registrado',
        'warning'
      )
      }
      
}
