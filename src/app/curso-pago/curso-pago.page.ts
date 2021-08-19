import { ServiciosService } from './../servicios.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from './../alert.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-pago',
  templateUrl: './curso-pago.page.html',
  styleUrls: ['./curso-pago.page.scss'],
})
export class CursoPagoPage implements OnInit {

  curso: any;
  cursos: any[];
  id: any;
  titulo: any;
  imagenes: any;
  contenido: any;

  constructor(
    private activeroute: ActivatedRoute,
    private alertService: AlertService,
    private loading: LoadingController,
    private servicio: ServiciosService) {
    }

  ngOnInit() {
    this.activeroute.params.subscribe((data: any)=>{
      this.id = data.cursoId;

      return this.servicio.getDataParamsAPI('curso', this.id)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .subscribe((data: any)=>{
        console.log(data);
        this.titulo = data.noticia.titulo;
        this.imagenes = data.noticia.imagenes;
        this.contenido = data.noticia.contenido;
        console.log(data);
      });
    });
  }




  onClickVerImagen() {
    //this.photoViewer.show(this.curso.foto);
  }

  pagar() {
  }

}
