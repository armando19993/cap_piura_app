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

  constructor(
    private activeroute: ActivatedRoute,
    private alertService: AlertService,
    private loading: LoadingController,
    private servicio: ServiciosService) {
      this. listarCursos();
    }

  ngOnInit() {
  }

  async listarCursos(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();

    return this.servicio.getDataAPI('cursos')
    .subscribe((data: any)=>{
      this.cursos = data.cursos;

      this.activeroute.params.subscribe((ruta: any) => {
        this.curso = this.cursos.find(x => x.id === + ruta.cursoId);
        this.curso.foto =  'https://retos-operaciones-logistica.eae.es/wp-content/uploads/2018/04/iStock-627490508.jpg';
        console.log(this.curso);
      });

      loader.dismiss();

    });
  }


  onClickVerImagen() {
    //this.photoViewer.show(this.curso.foto);
  }

  pagar() {
  }

}
