import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credenciales-externo',
  templateUrl: './credenciales-externo.page.html',
  styleUrls: ['./credenciales-externo.page.scss'],
})
export class CredencialesExternoPage implements OnInit {
  dni: any;
  correo: any;

  constructor() { }

  ngOnInit() {
  }

  verficarDatos(){}
}
