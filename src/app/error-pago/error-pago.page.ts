import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-error-pago',
  templateUrl: './error-pago.page.html',
  styleUrls: ['./error-pago.page.scss'],
})
export class ErrorPagoPage implements OnInit {

  estado_pago: any;
  id_pago: any;
  estado: any;

  constructor(
    private activeroute: ActivatedRoute,
    private servicio: ServiciosService,
    private loading: LoadingController
  ) { }

  ngOnInit() {
    this.activeroute.params.subscribe((data: any)=>{
      this.estado = data.Estado;
      this.id_pago = data.Id;
    });

    this.verificarTipoError();
    this.registrarTransaccion();
  }

  verificarTipoError(){
    if(this.estado == "OTHE")
    {
      this.estado_pago = "Su transaccion se ha rechazado por error general, vuelva a intentar, si el error persiste intente mas tarde";
    }

    if(this.estado == "FUND")
    {
      this.estado_pago ="Su transaccion ha sido rechazada por falta de fondos.";
    }

    if(this.estado == "SECU")
    {
      this.estado_pago = "Su transaccion ha sido rechazada por error con su CVV, intente de nuevo."
    }

    if(this.estado == "FORM")
    {
      this.estado_pago = "Su transaccion se ha rechazado por algun general en sus datos, vuelva a intentar por favor.";
    }

    if(this.estado == "FIN")
    {
      this.estado_pago = "Error desconcido, no hemos procesado su pago, vuelva a intentar o contacte con soporte.";
    }
  }

  registrarTransaccion(){
    return this.servicio.getDataParamsTwo('addTransaccionStatus', this.id_pago, this.estado)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .subscribe((data: any)=>{
        if(data == 1){
          this.servicio.Mensaje('Error comunciado al CAP con exito');
        }
      });
  }

}
