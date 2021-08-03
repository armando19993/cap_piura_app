import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  nombre: any;
  correo: any;
  celular: any;
  direccion: any;
  fecha_nacimiento: any;
  documento: any;
  ruc: any;
  id: any;

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
    
    this.id = data.id;

     this.nombre = data.nombres + " " + data.apellido_parteno + " " + data.apellido_materno;
     this.correo = data.correo;
     this.celular = data.celular;
     this.ruc = data.ruc;
     this.direccion = data.direccion;
     this.fecha_nacimiento = data.fecha_nacimiento;

     console.log(data);

     loader.dismiss();
  }

  async actualizarDatos(){

    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();

    const data = JSON.parse(window.localStorage.getItem("usuario"));
    console.log(data);
    const value = this.id = data.id;

    let dataForm = {
      correo : this.correo,
      celular : this.celular,
      ruc : this.ruc,
      direccion : this.direccion,
      fecha_nacimiento : this.fecha_nacimiento,
    };

    return this.servicio.postDataAPI(dataForm, 'update-usuario-externo-app/'+value)
    .subscribe((data:any) => {
      window.localStorage.setItem("usuario", JSON.stringify(data));
        this.servicio.Mensaje('Informacion Actualizada con exito');
        loader.dismiss();
    })
  }

}
