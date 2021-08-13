import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/alert.service';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-tarjeta-dependencia',
  templateUrl: './tarjeta-dependencia.component.html',
  styleUrls: ['./tarjeta-dependencia.component.scss'],
})
export class TarjetaDependenciaComponent implements OnInit {

  dependencias: any;

  constructor(private activeroute: ActivatedRoute,
    private alertService: AlertService,
    private loading: LoadingController,
    private servicio: ServiciosService) { }

  ngOnInit() {
    this.cargarDependencias();
  }

  async cargarDependencias(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();

    return this.servicio.getDataAPI('dependencias')
    .subscribe((data: any)=>{
      this.dependencias = data.dependencias;
      console.log(this.dependencias);

      loader.dismiss();

    });
  }

}
