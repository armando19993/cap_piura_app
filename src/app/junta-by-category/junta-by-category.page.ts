import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-junta-by-category',
  templateUrl: './junta-by-category.page.html',
  styleUrls: ['./junta-by-category.page.scss'],
})
export class JuntaByCategoryPage implements OnInit {

  categorias: any;
  id: any;
  junta: any;
  usuarios: any;

  constructor(
    private router: Router,
    private loading: LoadingController,
    private servicio: ServiciosService,
    private activeroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.listarcategorias();
    this.listarjunta();
  }


  async listarjunta(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();


     this.activeroute.params.subscribe((data: any)=>{
       this.id = data.id;

       return this.servicio.getDataParamsAPI('juntaByCategory', this.id)
       .subscribe((data: any)=>{
         this.usuarios = data.junta;
         console.log(data);
         loader.dismiss();
       });
     });


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


}
