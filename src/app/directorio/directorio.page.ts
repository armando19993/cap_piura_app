import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.page.html',
  styleUrls: ['./directorio.page.scss'],
})
export class DirectorioPage implements OnInit {

  botonSeleccionado: number;

  constructor() {
    this.botonSeleccionado = 1;
  }

  ngOnInit() {
  }

  onClickBoton(event){
    this.botonSeleccionado = event;
  }

}
