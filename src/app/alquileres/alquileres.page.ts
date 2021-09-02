import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-alquileres',
  templateUrl: './alquileres.page.html',
  styleUrls: ['./alquileres.page.scss'],
})
export class AlquileresPage implements OnInit {
  alquileres: any;

  constructor(
    private router: Router,
    private loading: LoadingController,
    private servicio: ServiciosService
  ) { }

  ngOnInit() {
    this.listarAlquileres();
  }

  async listarAlquileres(){
    const data = JSON.parse(window.localStorage.getItem("usuario"));
    return this.servicio.getDataParamsAPI('getAlquileresUsuario', data.dni)
    .subscribe((data: any)=>{
      this.alquileres = data.alquileres;
      console.log(data.alquileres);
    });
  }

  descargar(url){
    window.open(url, "__self");
   }
}
