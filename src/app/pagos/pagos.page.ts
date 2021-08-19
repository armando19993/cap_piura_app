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
  tipo_pago: any;
  monto = 0;
  titulo: any;
  descripcion: any;
  pago: any;
  id: any;

  tipoPagoSeleccionado: any;
  tipo: string;

  constructor( private router: Router,
    private loading: LoadingController,
    private servicio: ServiciosService,
    private activeroute: ActivatedRoute) { }

  ngOnInit() {
    this.listarTiposDePago();
  }



  async listarTiposDePago(){
    return this.servicio.getDataAPI('tiposPagos')
    .subscribe((data: any)=>{
      this.tiposPago = data.tipos;
      console.log(this.tiposPago);
    });

  }

  async listarPagos(){
      this.tipo = window.localStorage.getItem('tipo_usuario');
      console.log("se esta ejecutando");
      return this.servicio.getDataParamsTwo('PagosByType', this.tipo_pago, this.tipo)
      .subscribe((data: any)=>{
        this.formasPago = data.pagos;
        console.log(data);
      });
  }

  async getPago(){
    return this.servicio.getDataParamsAPI('getDataPago', this.pago)
    .subscribe((data:any) => {
      this.titulo = data.pago.pago;
      this.descripcion = data.pago.concepto;
      this.monto = data.pago.monto;
      console.log(data);
    });
  }

  async pagar(){
    const data = JSON.parse(window.localStorage.getItem('usuario'));

    let formData = {
        reg_cap : data.reg_cap,
        monto : this.monto,
        pago_concepto: this.titulo + "  -  " + this.descripcion ,
        estado: 1
    }

    return this.servicio.postDataAPI(formData, 'emitir-certificado')
    .subscribe((data: any) => {
      this.id = data.id;
      this.monto = data.monto;

      this.router.navigate(['/tipo-documento/'+this.id]);
    });
  }

}
