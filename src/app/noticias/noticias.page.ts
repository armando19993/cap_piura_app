import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  public noticias: any[] = [];
  nombre: any;
  documento: any;
  categorias: any;

  constructor(
    private router: Router,
    private loading: LoadingController,
    private servicio: ServiciosService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getDatos();
    this.listarnoticias();
    this.listarcategorias();
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


 cerrarSesion(){
   localStorage.clear();
   this.router.navigate(['/folder']);
 }

}
