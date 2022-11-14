import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

//Servicios
import { NotificacionesLandingService } from 'src/app/services/notificaciones/notificaciones-landing.service';
import { LocalStorageService } from 'src/app/services/localHost/local-host.service';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dataHttp: any;
  //Spinner
  loading: boolean = false;

  //formulario de login
  frmLogin = this.formBuilder.group({
    userName: [localStorage.getItem('userName') || '', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    remember: [true],
  })



  constructor(
    private formBuilder: FormBuilder,
    private Swal: NotificacionesLandingService,
    private router: Router,
    private usuarioService: AuthService,
    private localhost: LocalStorageService ,
  ) { }

  ngOnInit(): void {
  }



  onSubmit() {
    //Revisamos que los campos esten cargados correctamente y lo mostramos al usuario con un contorno rojo
    if (this.frmLogin.invalid) {
      const form = document.getElementsByClassName('container-form')[0] as HTMLFormElement;
      form.classList.add('was-validated');
      return;
    }

    // Guardar usuario en el local Storage el correo de inicio
    if ( this.frmLogin.get('remember')?.value) {
      localStorage.setItem('userName', this.frmLogin.get<any>('userName')?.value)
    }else{
      localStorage.removeItem('userName')
    }


    // Si todos los campos son correctos 
    if (this.frmLogin.valid) {

      this.usuarioService.loginUsuario(this.frmLogin.value)
        .subscribe((resp: any) => {
          console.log('usuario logueado')
          console.log(resp);

          this.dataHttp = resp['user'];

          // almacenamos en el local Storage el roll del usuario para proteger las rutas
          localStorage.setItem('rol', this.dataHttp.rol)

          // console.warn(this.dataHttp)
          if (this.dataHttp.rol === "usuario") {
            this.router.navigate(['/usuario'])
            //msj de exito
            this.Swal.bienvenidoUsuario()
          }  else if (this.dataHttp.rol === "superAdmin"){
            this.router.navigate(['/superAdmin'])
            this.Swal.bienvenidoAdmin()
          } else if ( this.dataHttp.rol === "comercios"){
            this.router.navigate(['/comercios'])
            this.Swal.bienvenidoComercio()
          }
        }, (err) => console.warn(err))

    }
  }
}