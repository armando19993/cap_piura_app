import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pago-exitoso',
  templateUrl: './pago-exitoso.page.html',
  styleUrls: ['./pago-exitoso.page.scss'],
})
export class PagoExitosoPage implements OnInit {
  public pago: any[] = [];
  id: any;
  id_mercado: any;

  constructor(
    private router: Router,
    private loading: LoadingController,
    private servicio: ServiciosService,
    private activeroute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeroute.params.subscribe((data: any)=>{
      this.id = data.id;
      this.id_mercado = data.pago;
    });

    return this.servicio.getDataParamsTwo('update-mercadopago-procesado', this.id, this.id_mercado)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .subscribe((data: any)=>{
        this.pago = data;
        console.log(this.pago);
      });
  }

}
