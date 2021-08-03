import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../servicios.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.page.html',
  styleUrls: ['./tipo-documento.page.scss'],
})
export class TipoDocumentoPage implements OnInit {

  nombre: any;
  dni: any;
  direccion: any;
  showhidepregnant: boolean;
  fact: boolean;
  bolt: boolean;
  claseboleta: any;
  clasefactura: any;
  ruc: any;
  razon_social: any;
  validate: string;
  datos_sunat: boolean;
  clasepara: string;
  tipo_documento: string;
  id: any;
  exonerable: any;
  monto: any;
  documento: any;
  dataForm:any;

  constructor(
    private servicio: ServiciosService,
    private router: Router,
    private loading: LoadingController,
    private activeroute: ActivatedRoute,
  ) { }

  async ngOnInit() {

    const loader = await this.loading.create({
     cssClass: 'loader_cont',
    }); loader.present();

   this.activeroute.params.subscribe((data: any)=>{
      this.id = data.id;

      return this.servicio.getDataParamsAPI('deuda', this.id)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .subscribe((data: any)=>{
        this.exonerable = data.exonerable;
        this.monto = data.monto;
        console.log(data);
      });
    });

    const data = JSON.parse(window.localStorage.getItem('usuario'));
    this.datos_sunat = true;

    this.bolt = true;
    this.claseboleta = "boton-documento-active";
    this.clasefactura = "boton-documento";
    this.tipo_documento = "boleta";


    if(window.localStorage.getItem('tipo_usuario') === 'externo'){
      this.nombre = data.nombres + ' ' + data.apellido_parteno;
      this.dni = data.dni;
      this.direccion = data.direccion;
      this.ruc = data.ruc;
    }
    if(window.localStorage.getItem('tipo_usuario') === 'colegiado'){
      this.nombre = data.nombres + ' ' + data.apellido_paterno;
      this.dni = data.dni;
      this.direccion = data.direccion;
      this.ruc = data.ruc;
    }

  loader.dismiss();
  }


  factura() {
    this.fact = true;
    this.bolt = false;
    this.clasefactura = "boton-documento-active";
    this.claseboleta = "boton-documento";
    this.tipo_documento = "factura";

    return this.servicio.getDataParamsAPI('verificarRUC', this.ruc)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .subscribe((data: any)=>{
        console.log(data.error);
        if(data.error !== 'undefined'){
          this.razon_social = data.nombre;
          this.servicio.Mensaje('Documento RUC correcto, datos obtenidos desde la SUNAT!', 'success');
          this.validate = "si";
          this.datos_sunat = true;

        }
        if(data.error != null){
          this.servicio.Mensaje('Documento RUC incorrecto, por favor introduzca uno correcto!', 'danger');
          this.validate = "no";
          this.datos_sunat = false;
        }
        
        console.log(data);
        
     
      });
  }

  boleta() {
    this.fact = false;
    this.bolt = true;
    this.claseboleta = "boton-documento-active";
    this.clasefactura = "boton-documento";
    this.tipo_documento = "boleta"; 
  }

  desbloquear(){
    this.clasepara = "boton-documento-active";
    this.datos_sunat = false;
  }

  verificarRUC(){
    return this.servicio.getDataParamsAPI('verificarRUC', this.ruc)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .subscribe((data: any)=>{
        console.log(data.error);
        if(data.error !== 'undefined'){
          this.razon_social = data.nombre;
          this.servicio.Mensaje('Documento RUC correcto, datos obtenidos desde la SUNAT!', 'success');
          this.validate = "si";
          this.datos_sunat = true;

        }
        if(data.error != null){
          this.servicio.Mensaje('Documento RUC incorrecto, por favor introduzca uno correcto!', 'danger');
          this.validate = "no";
          this.datos_sunat = false;
        }
        
        console.log(data);
      });
  }


  async GuardarContinuar(){

    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();


    if(this.tipo_documento == "boleta"){
        let dataForm = {
          id_deuda : this.id,
          tipo_documento : this.tipo_documento,
          documento : this.dni,
          razon_social : this.nombre,
          direccion : this.direccion
        };

        return this.servicio.postDataAPI(dataForm, 'update-deuda')
        .subscribe((data:any) => {
            this.router.navigate(['/pasarela/'+this.id+'/'+this.monto]);
            loader.dismiss();
        })
    }
    if(this.tipo_documento == "factura"){
        let dataForm = {
          id_deuda : this.id,
          tipo_documento : this.tipo_documento,
          documento : this.ruc,
          razon_social : this.razon_social,
          direccion : this.direccion
        };

        return this.servicio.postDataAPI(dataForm, 'update-deuda')
        .subscribe((data:any) => {
            this.router.navigate(['/pasarela/'+this.id+'/'+this.monto]);
            loader.dismiss();
        })
    }    
  }

}