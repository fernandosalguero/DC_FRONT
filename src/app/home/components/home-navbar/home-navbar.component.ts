import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent implements OnInit {

  registred: boolean = false;
  title = 'DóndeCompro?';
  auth: any = '';
  username: any;
  
  constructor() { }

  ngOnInit(): void {
        // mostramos el avatar si en el local storage hay informacion guardada
        this.auth = localStorage.getItem('username');
        if (this.auth !== null) {
          this.username = this.auth;
          this.registred = true;
        }
  }

}
