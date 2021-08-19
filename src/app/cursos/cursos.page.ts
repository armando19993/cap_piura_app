import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  categorias: any;
  cursos: any;

  constructor(
    private router: Router,
    private loading: LoadingController,
    private servicio: ServiciosService
  ) { }

  ngOnInit() {

    this.listarcategorias();
    this.listarCursos();
  }


  async listarcategorias(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();


    return this.servicio.getDataAPI('categoriasCursos')
    .subscribe((data: any)=>{
      this.categorias = data.categorias;
      console.log(this.categorias);
      loader.dismiss();
    });
  }

  async listarCursos(){
    return this.servicio.getDataParamsAPI('curso', 0)
    .subscribe((data: any)=>{
      this.cursos = data.cursos;
      console.log(data.cursos);
    });
  }

  async cambiarCursos(id){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();

    return this.servicio.getDataParamsAPI('curso', id)
    .subscribe((data: any)=>{
      this.cursos = data.cursos;
      console.log(data.cursos);
      loader.dismiss();
    });
  }

}
