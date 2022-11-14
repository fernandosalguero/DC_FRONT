import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

/**
 * ? verificamos el rol en el local storage
 * *traemos el rol almacenado previamente en el logincomponent
 */

  validarRol(){
    const nombreRol = localStorage.getItem('rol')
    console.log(nombreRol);
    return nombreRol
  }





}