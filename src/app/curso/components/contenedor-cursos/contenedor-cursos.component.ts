import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenedor-cursos',
  templateUrl: './contenedor-cursos.component.html',
  styleUrls: ['./contenedor-cursos.component.scss'],
})
export class ContenedorCursosComponent implements OnInit {

  @Input() cursos: any;


  constructor() { }

  ngOnInit() {}

}
