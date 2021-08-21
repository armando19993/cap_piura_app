import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-solicitud-alquiler',
  templateUrl: './solicitud-alquiler.page.html',
  styleUrls: ['./solicitud-alquiler.page.scss'],
})
export class SolicitudAlquilerPage implements OnInit {

  local:any;
  lista_alquileres: any;
  lista_tarifas: any;
  desde: any;
  hasta: any;
  tarifa_date: any;
  tarifa_monto: any;
  detalle_solicitud: any;


  constructor(
    private loading: LoadingController,
    private servicio: ServiciosService,
    private activeroute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.listarAlquileres();
  }

  async listarAlquileres(){
    return this.servicio.getDataAPI('getListadoAlquileres')
    .subscribe((data: any)=>{
      this.lista_alquileres = data.alquileres;
      console.log(this.lista_alquileres);
    });
  }

  async listarTarifas(){
    return this.servicio.getDataParamsAPI('getTarifasAlquiler', this.local)
    .subscribe((data: any)=>{
      this.lista_tarifas = data.tarifas;
      console.log(this.lista_tarifas);
    })
  }

  async datearTarifa(){
    return this.servicio.getDataParamsAPI('getTarifa', this.tarifa_date)
    .subscribe((data: any)=>{
      this.tarifa_monto = data.tarifa;
    });
  }

  async solicitarAlquiler(){
    const data = JSON.parse(window.localStorage.getItem('usuario'));
    const tipo_usuario = window.localStorage.getItem('tipo_usuario');

    let formData = {
        tipo_solicitante: tipo_usuario,
        documento_solicitante: data.dni,
        solicitante: data.nombres + ' ' + data.apellido_parteno + ' ' + data.apellido_materno,
        detalle_solicitud: this.detalle_solicitud,
        desde: this.desde,
        hasta: this.hasta,
        status: 1,
        monto: this.tarifa_monto,
        id_alquiler_lista: this.local,
        tiempo: this.tarifa_date
    }

    return this.servicio.postDataAPI(formData, 'solicitar-alquiler')
    .subscribe((data: any) => {
      this.router.navigate(['/alquileres']);
    });
  }


}
