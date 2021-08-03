import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.page.html',
  styleUrls: ['./noticia.page.scss'],
})
export class NoticiaPage implements OnInit {
  id: any;
  noticias: any;
  noticia: any;
  titulo: any;
  public imagenes: any[] = [];
  contenido: any;

  constructor(
    private activeroute: ActivatedRoute,
    private servicio: ServiciosService,
    private loading: LoadingController
  ) { }

  ngOnInit() {
    this.activeroute.params.subscribe((data: any)=>{
      this.id = data.id;

      return this.servicio.getDataParamsAPI('noticias', this.id)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .subscribe((data: any)=>{
        this.titulo = data.noticia.titulo;
        this.imagenes = data.noticia.imagenes;
        this.contenido = data.noticia.contenido;
        console.log(data);
      });
    });
  }

}
