import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-estado-de-cuenta',
  templateUrl: './estado-de-cuenta.page.html',
  styleUrls: ['./estado-de-cuenta.page.scss'],
})
export class EstadoDeCuentaPage implements OnInit {

  public recibos_data: any[] = [];
  public tipo_user:any;
  public documento: any;
  

  constructor(
    private router: Router,
    private loading: LoadingController,
    private servicio: ServiciosService
  ) { }

  ngOnInit() {
    const data = JSON.parse(window.localStorage.getItem('usuario'));
    this.tipo_user = window.localStorage.getItem('tipo_usuario');
    
    if(window.localStorage.getItem('tipo_usuario') === 'externo'){
        this.documento = data.dni;
      }
      if(window.localStorage.getItem('tipo_usuario') === 'colegiado'){
        this.documento = data.reg_cap;
      }
  }

  ionViewWillEnter(){
    if(this.tipo_user == 'colegiado'){
      this.recibos_colegiados();
    }
    else{

    }
  }

  async recibos_colegiados(){
     const loader = await this.loading.create({
     cssClass: 'loader_cont',
    }); loader.present();

    return this.servicio.getDataParamsAPI('deudas', this.documento)
    .subscribe((data: any)=>{
     this.recibos_data = data;
     console.log(this.recibos_data);
     loader.dismiss();
   });
  }

}
