import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

declare var downgularQueue: any;

@Component({
  selector: 'app-cetificados-habilidad',
  templateUrl: './cetificados-habilidad.page.html',
  styleUrls: ['./cetificados-habilidad.page.scss'],
})
export class CetificadosHabilidadPage implements OnInit {
  id: any;
  monto: any;
  tipo: any;
  documento: any;

  certificados_data: any[] = [];

  constructor(
    private servicio: ServiciosService,
    private router: Router,
    private loading: LoadingController,
  ) { }


  ngOnInit() {
    const data = JSON.parse(window.localStorage.getItem('usuario'));
    if(data.estado == 1){
          this.tipo = window.localStorage.getItem('tipo_usuario')+"_activo";
        }
        else{
          this.tipo = window.localStorage.getItem('tipo_usuario')+"_inactivo";
        }
    
    if(window.localStorage.getItem('tipo_usuario') === 'externo'){
        this.documento = data.dni;
      }
      if(window.localStorage.getItem('tipo_usuario') === 'colegiado'){
        this.documento = data.reg_cap;
      }
  }

  
  ionViewWillEnter(){
      this.certificados_colegiados();
  }

  async certificados_colegiados(){
     const loader = await this.loading.create({
     cssClass: 'loader_cont',
    }); loader.present();

    return this.servicio.getDataParamsAPI('certificados-colegiados', this.documento)
    .subscribe((data: any)=>{
     this.certificados_data = data;
     console.log(this.certificados_data);
     loader.dismiss();
   });
  }





  async nuevo_certificado(){
    const data = JSON.parse(window.localStorage.getItem('usuario'));

    let formData = {
        reg_cap : data.reg_cap,
        monto : 50,
        pago_concepto: "EMISION DE CERTIFICADO DE HABILIDAD",
        estado: 1
    }

    return this.servicio.postDataAPI(formData, 'emitir-certificado')
    .subscribe((data: any) => {
      this.id = data.id;
      this.monto = data.monto;

      this.router.navigate(['/tipo-documento/'+this.id]);
    });


  }


    descargar(url){
     window.open(url, "__self");
    }
    



}
