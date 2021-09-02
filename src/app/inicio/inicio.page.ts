import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombre: any;
  documento: any;

  public noticias: any[] = [];
  tipoUser: string;

  constructor(
    private router: Router,
    private loading: LoadingController,
    private servicio: ServiciosService
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem('usuario') != null) {
    }
    else{
      this.router.navigate(['/folder']);
    }

  }

  ionViewWillEnter(){
    this.getDatos();
    this.listarnoticias();
  }

  async getDatos(){
     const data = JSON.parse(window.localStorage.getItem('usuario'));

      this.nombre = data.nombres + data.apellido_parteno;
      this.documento = data.apellido;

      console.log(data);

  }

  async listarnoticias(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();


    return this.servicio.getDataAPI('noticias')
    .subscribe((data: any)=>{
      this.noticias = data.noticias;
      console.log(this.noticias);
      loader.dismiss();
    });
  }


  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['/folder']);
  }

}
