import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-bolsa-trabajo',
  templateUrl: './bolsa-trabajo.page.html',
  styleUrls: ['./bolsa-trabajo.page.scss'],
})
export class BolsaTrabajoPage implements OnInit {
  public bolsas: any[] = [];

  constructor(
    private router: Router,
    private loading: LoadingController,
    private servicio: ServiciosService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getBolsas();
  }

  async getBolsas(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();


    return this.servicio.getDataAPI('bolsas')
    .subscribe((data: any)=>{
      this.bolsas = data.bolsas;
      console.log(data.bolsas);
      loader.dismiss();
    });
  }

}
