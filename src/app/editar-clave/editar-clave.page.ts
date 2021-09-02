import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-editar-clave',
  templateUrl: './editar-clave.page.html',
  styleUrls: ['./editar-clave.page.scss'],
})
export class EditarClavePage implements OnInit {
  clave1: any;
  clave2: string;
  documento: any;
  nombre: string;

  constructor(
    private loading: LoadingController,
    private servicio: ServiciosService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getDatos();
  }

  async getDatos(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();
     const data = JSON.parse(window.localStorage.getItem("usuario"));

     if(window.localStorage.getItem('tipo_usuario') === 'externo'){
      this.documento = data.dni;
    }
    else{
      this.documento = data.reg_cap;
    }

    if(data.nombres == undefined){
      data.nombres = "";
    }
    if(data.apellido_paterno == undefined){
      data.apellido_paterno = "";
    }
    if(data.apellido_materno == undefined){
      data.apellido_materno = "";
    }

     this.nombre = data.nombres + " " + data.apellido_paterno + " " + data.apellido_materno;

     console.log(data);

     loader.dismiss();
  }

  async cambiarClave(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();

    const data = JSON.parse(window.localStorage.getItem("usuario"));
    console.log(data);
    const value = data.id;

    let dataForm = {
      clave1 : this.clave1,
      clave2 : this.clave2,
    };

    if(window.localStorage.getItem('tipo_usuario') === 'externo'){
    return this.servicio.postDataAPI(dataForm, 'update-clave-externo-app/'+value)
    .subscribe((data:any) => {
      if(data > 0){
        this.servicio.Mensaje('Contraseña Creada con exito');
        this.router.navigate(['/editar-perfil']);
        loader.dismiss();
      }
      else{
        this.servicio.Mensaje('Claves No Coinciden', 'danger');
        loader.dismiss();
      }
    })
    }
    else{
      return this.servicio.postDataAPI(dataForm, 'update-clave-colegiado-app/'+value)
    .subscribe((data:any) => {
      if(data > 0){
        this.servicio.Mensaje('Contraseña Creada con exito');
        this.router.navigate(['/editar-perfil']);
        loader.dismiss();
      }
      else{
        this.servicio.Mensaje('Claves No Coinciden', 'danger');
        loader.dismiss();
      }
    })
    }



  }

}
