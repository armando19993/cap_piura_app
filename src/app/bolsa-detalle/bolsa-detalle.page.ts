import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-bolsa-detalle',
  templateUrl: './bolsa-detalle.page.html',
  styleUrls: ['./bolsa-detalle.page.scss'],
})
export class BolsaDetallePage implements OnInit {
  id: any;
  titulo: any;
  descripcion: any;
  fecha: any;

  constructor(
    private activeroute: ActivatedRoute,
    private servicio: ServiciosService,
    private loading: LoadingController,
  ) { }


  ngOnInit() {
    this.getNoticia();
  }


  async getNoticia(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();

     this.activeroute.params.subscribe((data: any)=>{
      this.id = data.id;

      return this.servicio.getDataParamsAPI('bolsas', this.id)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .subscribe((data: any)=>{
        this.titulo = data.bolsa.titulo;
        this.descripcion = data.bolsa.descripcion;
        this.fecha = data.bolsa.fecha;
        loader.dismiss();
        console.log(data.bolsa);
      });
    });

  }
}
