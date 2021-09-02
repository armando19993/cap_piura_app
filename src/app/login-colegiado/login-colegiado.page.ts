import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-login-colegiado',
  templateUrl: './login-colegiado.page.html',
  styleUrls: ['./login-colegiado.page.scss'],
})
export class LoginColegiadoPage implements OnInit {
  cip: any;
  clave: any;

  constructor(
    private router:Router,
    private loading: LoadingController,
    public servicio: ServiciosService
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem("usuario") != null) {
      this.router.navigate(['/inicio']);
    }
  }

  async IniciarSesion(){
    if(this.cip == undefined){
      this.servicio.Mensaje('El numero de CAP no debe estar vacio', 'danger');
    }
    else if(this.clave == undefined){
      this.servicio.Mensaje('La clave no puede estar vacia', 'danger');
    }
    else{
      const loader = await this.loading.create({
        cssClass: 'loader_cont',
       }); loader.present();

      let formData = {
          reg_cap : this.cip,
          clave : this.clave
      }

      return this.servicio.postDataAPI(formData, 'login-colegiado')
      .subscribe((data: any) => {

        if(data != null){
          window.localStorage.setItem("usuario", JSON.stringify(data));
          const tipo_usuario = "colegiado";
          window.localStorage.setItem("tipo_usuario", tipo_usuario);
          window.localStorage.setItem("estado", data.estado);
          console.log(JSON.parse(localStorage.getItem('usuario')));
          window.location.reload();
          loader.dismiss();
        }
        else{
          this.servicio.Mensaje('Datos Erroneos, Vuelva a intentar!', 'danger');
          loader.dismiss();
        }
      });
    }

  }

}
