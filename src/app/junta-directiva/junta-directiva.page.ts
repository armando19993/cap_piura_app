import { LoadingController } from '@ionic/angular';
import { ServiciosService } from './../servicios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-junta-directiva',
  templateUrl: './junta-directiva.page.html',
  styleUrls: ['./junta-directiva.page.scss'],
})
export class JuntaDirectivaPage implements OnInit {

  categorias: any;

  usuarios = [
    {id: 86824,  nombre: 'Diego Alonso López Ramirez', cargo:'Decano', correo:'decano@decano.com',
     foto:'https://www.billiardport.com/assets/pages/media/profile/profile_user.jpg' },
    {id: 72499,  nombre: 'Diana Navid Sabillón Zelaya', cargo:'Director', correo:'director@decano.com',
    foto:'https://www.billiardport.com/assets/pages/media/profile/profile_user.jpg' }
  ];

  constructor(private servicio: ServiciosService,
    private loading: LoadingController,) { }

  ngOnInit() {
    this.listarcategorias();
  }

  async listarcategorias(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();


    return this.servicio.getDataAPI('categoriasNoticias')
    .subscribe((data: any)=>{
      this.categorias = data.categorias;
      console.log(this.categorias);
      loader.dismiss();
    });
  }

}
