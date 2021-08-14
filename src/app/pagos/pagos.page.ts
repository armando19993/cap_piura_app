import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  tiposPago: any;
  formasPago: any;

  tipoPagoSeleccionado: any;

  constructor( private router: Router,
    private loading: LoadingController,
    private servicio: ServiciosService,
    private activeroute: ActivatedRoute) { }

  ngOnInit() {
    this.tiposPago =  [
      {
        id: 1, categoria: 'Cuotas Ordinarias'
      }
    ];

    this.formasPago =  [
      {
        id: 1, categoria: 'Mensualidad'
      }
    ];
  }



  async listarTiposDePago(){
    return this.servicio.getDataAPI('tiposPagos')
    .subscribe((data: any)=>{
      this.tiposPago = data.tipos;
    });

  }

  pagar(){

  }



}
