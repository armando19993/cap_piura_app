import { AlertService } from './../alert.service';
import { ServiciosService } from './../servicios.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-curso-reserva',
  templateUrl: './curso-reserva.page.html',
  styleUrls: ['./curso-reserva.page.scss'],
})
export class CursoReservaPage implements OnInit {

  curso: any;
  cursos: any[];

  constructor(
    private activeroute: ActivatedRoute,
    private photoViewer: PhotoViewer,
    private loading: LoadingController,
    private alertService: AlertService,
    private servicio: ServiciosService) {
      this.listarCursos();
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



  async reservar() {

   const respuesta = await this.alertService.question('¿Desea Reservar este curso?').then(data => {
     if (data === 'ok') {
       this.alertService.ok('Reserva Insertada Correctamente','',4000);
     }

   });



  }

  onClickVerImagen() {
    this.photoViewer.show(this.curso.foto);
  }

}
