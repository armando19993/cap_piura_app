import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  cursos: any;

  constructor(
    private router: Router,
    private loading: LoadingController,
    private servicio: ServiciosService
  ) { }

  ngOnInit() {
    this.listarCursos();
  }

  ejecutar(){

  }

  async listarCursos(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();


    return this.servicio.getDataAPI('cursos')
    .subscribe((data: any)=>{
      this.cursos = data.cursos;
      console.log(this.cursos);
      loader.dismiss();
    });
  }

}
