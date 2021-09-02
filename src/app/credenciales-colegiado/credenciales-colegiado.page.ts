import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-credenciales-colegiado',
  templateUrl: './credenciales-colegiado.page.html',
  styleUrls: ['./credenciales-colegiado.page.scss'],
})
export class CredencialesColegiadoPage implements OnInit {

  cap: any;
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
    if(this.cap == undefined){
      this.servicio.Mensaje('El numero de CAP no debe estar vacio', 'danger');
    }
    else if(this.correo == undefined){
      this.servicio.Mensaje('El correo no puede estar vacia', 'danger');
    }
    else{
      const loader = await this.loading.create({
        cssClass: 'loader_cont',
       }); loader.present();

      let formData = {
          cap : this.cap,
          correo : this.correo
      }

       return this.servicio.postDataAPI(formData, 'recuperar-colegiado')
      .subscribe((data: any) => {

        if(data == 1){
          this.servicio.Mensaje('El correo, ingresado no existe en nuestra base de datos, intente nuevamente', 'danger');
          loader.dismiss();
        }
        else if(data == 2){
          this.servicio.Mensaje('El CAP ingresado, no coincide con nuestra base de datos', 'danger');
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
    this.router.navigate(['/login-colegiado']);
  }




}
