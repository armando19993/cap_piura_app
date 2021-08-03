import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private servicio: ServiciosService
  ) { }


  ngOnInit() {
    this.activeroute.params.subscribe((data: any)=>{
      this.id = data.id;

      return this.servicio.getDataParamsAPI('bolsas', this.id)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .subscribe((data: any)=>{
        this.titulo = data.bolsa.titulo;
        this.descripcion = data.bolsa.descripcion;
        this.fecha = data.bolsa.fecha;

        console.log(data.bolsa);
      });
    });
  }
}
