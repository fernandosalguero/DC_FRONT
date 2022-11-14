import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificacionesLandingService } from 'src/app/services/notificaciones/notificaciones-landing.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //spiner
  loading: boolean = false;

  //formulario de registro
  frmRegister = this.formBuilder.group({
    nombreComleto: ['', Validators.required],
    userName: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    reTypePassword: ['', Validators.required],
    provincia: [''],
    localidad: [''],
    rol:['usuario'],
    terms: [false, Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private Swal: NotificacionesLandingService,
    private router: Router,
    private usuarioService: AuthService
  ) { }

  ngOnInit(): void {
  }

  //capturamos los datos del formulario 
  onSubmit() {
    //Revisamos que los campos esten cargados correctamente y lo mostramos al usuario con un contorno rojo
    if (this.frmRegister.invalid) {
      const form = document.getElementsByClassName('container-form')[0] as HTMLFormElement;
      form.classList.add('was-validated');
      return;
    }

    // Validamos que las contraseñas sean iguales
    if (this.frmRegister.value.password !== this.frmRegister.value.reTypePassword) {
      this.Swal.lasContraseñasNoCoinciden()
      // console.log('las contraseñas no coinciden');
      return;
    }

    // Validamos terminos y condiciones de uso
    if (this.frmRegister.value.terms == false) {
      console.log('favor de aceptar los terminos');
      this.Swal.terms()
      return;
    }

    // Si todos los campos son correctos 
    if (this.frmRegister.valid) {
      //msj de exito
      this.Swal.usuarioCreadoCorrectamente()

      //IMPRIMIMOS EN CONSOLA LOS VALORES DEL FORMULARIO
      // console.log(this.frmRegister.value);

      //NOS COMUNICAMOS CON EL SERVICIO
      this.usuarioService.crearUsuario(this.frmRegister.value)
      .subscribe( resp => {
        // console.log(this.frmRegister.value);        
        console.log('usuario creado')
        console.log(resp);
      }, (err) => console.warn(err) )


      //redireccionamos al login
      this.router.navigate(['/auth/login'])

    } else {
      console.log('Usuario no registrado');

    }

  }

  campoNoValido() {
    return !this.frmRegister.get('terms')?.value
  }
}
