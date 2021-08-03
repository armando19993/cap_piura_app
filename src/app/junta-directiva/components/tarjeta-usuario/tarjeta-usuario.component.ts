import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-usuario',
  templateUrl: './tarjeta-usuario.component.html',
  styleUrls: ['./tarjeta-usuario.component.scss'],
})
export class TarjetaUsuarioComponent implements OnInit {

  @Input() usuario: any;
  @Input() indice: number;

  constructor() { }

  ngOnInit() {}

}
