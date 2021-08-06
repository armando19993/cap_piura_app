import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-usuario-dependencia',
  templateUrl: './tarjeta-usuario-dependencia.component.html',
  styleUrls: ['./tarjeta-usuario-dependencia.component.scss'],
})
export class TarjetaUsuarioDependenciaComponent implements OnInit {

  @Input() usuario: any;

  constructor() { }

  ngOnInit() {}

}
