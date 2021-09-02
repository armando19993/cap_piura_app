import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-credenciales-externo',
  templateUrl: './credenciales-externo.page.html',
  styleUrls: ['./credenciales-externo.page.scss'],
})
export class CredencialesExternoPage implements OnInit {
  dni: any;
  correo: any;

  constructor(
    private router:Router,
    private loading: LoadingController,
    public servicio: ServiciosService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async verficarDatos(){
    if(this.dni == undefined){
      this.servicio.Mensaje('El numero de DNI no debe estar vacio', 'danger');
    }
    else if(this.correo == undefined){
      this.servicio.Mensaje('El correo no puede estar vacia', 'danger');
    }
    else{
      const loader = await this.loading.create({
        cssClass: 'loader_cont',
       }); loader.present();

      let formData = {
          dni : this.dni,
          correo : this.correo
      }

       return this.servicio.postDataAPI(formData, 'recuperar-externo')
      .subscribe((data: any) => {

        if(data == 1){
          this.servicio.Mensaje('El correo, ingresado no existe en nuestra base de datos, intente nuevamente', 'danger');
          loader.dismiss();
        }
        else if(data == 2){
          this.servicio.Mensaje('El dni ingresado, no coincide con nuestra base de datos', 'danger');
          loader.dismiss();
        }
        else if(data == 3){
          this.alertaResult();
          loader.dismiss();
        }

      });
    }
  }

  async alertaResult(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Crendenciales',
      subHeader: 'Enviadas con exito',
      message: 'Hemos enviado las credenciales a tu correo, revisa e intenta nuevamente acceder.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss( );
    console.log('onDidDismiss resolved with role', role);
    this.router.navigate(['/login-externo']);
  }




}

