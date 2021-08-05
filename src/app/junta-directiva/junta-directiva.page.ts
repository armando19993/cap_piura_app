import { LoadingController } from '@ionic/angular';
import { ServiciosService } from './../servicios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-junta-directiva',
  templateUrl: './junta-directiva.page.html',
  styleUrls: ['./junta-directiva.page.scss'],
})
export class JuntaDirectivaPage implements OnInit {

  categorias: any;
  id: any;

  usuarios: any;

  constructor(
    private servicio: ServiciosService,
    private loading: LoadingController,
    private activeroute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.listarcategorias();
    this.listarJuntas();
  }

  async listarcategorias(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();


    return this.servicio.getDataAPI('categoriasJuntas')
    .subscribe((data: any)=>{
      this.categorias = data.categorias;
      console.log(this.categorias);
      loader.dismiss();
    });
  }


  async listarJuntas(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();


     this.activeroute.params.subscribe((data: any)=>{
       this.id = data.id;

       return this.servicio.getDataParamsAPI('juntaByCategory', 1)
       // eslint-disable-next-line @typescript-eslint/no-shadow
       .subscribe((data: any)=>{
         this.usuarios = data.junta;
         console.log(data);
         loader.dismiss();
       });
     });


  }



}
