import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-detalle-pago',
  templateUrl: './detalle-pago.page.html',
  styleUrls: ['./detalle-pago.page.scss'],
})
export class DetallePagoPage implements OnInit {
  id: any;
  pago: any[] = [];
  tipo_documento: any;
  documento_electronico: any;

  constructor(
    private activeroute: ActivatedRoute,
    private servicio: ServiciosService,
    private loading: LoadingController
  ) { }

  ngOnInit() {
    this.activeroute.params.subscribe((data: any)=>{
      this.id = data.id;

      return this.servicio.getDataParamsAPI('detalle-pago', this.id)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .subscribe((data: any)=>{
        this.pago = data;

        if(data.tipo_documento == 1){
          this.tipo_documento = "DNI"
          this.documento_electronico = "BOLETA"
        }
        else{
          this.tipo_documento = "RUC"
          this.documento_electronico = "FACTURA"
        }

        console.log(this.pago);
      });
    });
  }

}
