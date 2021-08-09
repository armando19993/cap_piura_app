import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-curso',
  templateUrl: './tarjeta-curso.component.html',
  styleUrls: ['./tarjeta-curso.component.scss'],
})
export class TarjetaCursoComponent implements OnInit {

  @Input() curso: any;

  constructor(private photoViewer: PhotoViewer) { }

  ngOnInit() {
    this.curso.foto =
    'https://retos-operaciones-logistica.eae.es/wp-content/uploads/2018/04/iStock-627490508.jpg';
  }

  onCLickWhatsapp() {}
  onClickVerImagen() {
    this.photoViewer.show('https://retos-operaciones-logistica.eae.es/wp-content/uploads/2018/04/iStock-627490508.jpg');
  }
}
