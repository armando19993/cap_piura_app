import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {

  qr: any;

  constructor(
    private activeroute: ActivatedRoute,
    private servicio: ServiciosService,
    private loading: LoadingController
  ) { }

  ngOnInit() {
    this.activeroute.params.subscribe((data: any)=>{
      this.qr = "http://localhost:8000/img/"+data.id+".svg";
    });
  }

}
