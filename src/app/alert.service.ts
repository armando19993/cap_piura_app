import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  loading: any;

  constructor(private alertController: AlertController, private loadingController: LoadingController) { }

  public async ok(titulo, cuerpo, timer: number = 2000) {
    const alert = await this.alertController.create({
      header: titulo,
      message: cuerpo,
      cssClass: 'success',
      buttons: ['OK']
    });

    setTimeout(() => {
      alert.dismiss();
    }, timer);

    await alert.present();
  }


  public async error(titulo, cuerpo, timer: number = 2000) {
    const alert = await this.alertController.create({
      header: titulo,
      message: cuerpo,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'secondary'
        }
      ]
    });

    setTimeout(() => {
      alert.dismiss();
    }, timer);

    await alert.present();
  }

  public async showLoading(cuerpo) {
    this.loading = await this.loadingController.create({
      message: cuerpo
    });

    await this.loading.present();
  }

  public async closeLoading() {
    this.loading.dismiss();
  }

  async question(titulo): Promise<any> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: titulo,

        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (cancel) => {
              resolve('cancel');
            }
          }, {
            text: 'Aceptar',
            handler: (ok) => {
              resolve('ok');
            }
          }
        ]
      });
      alert.present();
    });
  }
}
