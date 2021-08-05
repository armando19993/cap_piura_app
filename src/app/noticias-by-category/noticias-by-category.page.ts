import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-noticias-by-category',
  templateUrl: './noticias-by-category.page.html',
  styleUrls: ['./noticias-by-category.page.scss'],
})
export class NoticiasByCategoryPage implements OnInit {

  public usuarios: any[] = [];
  nombre: any;
  documento: any;
  categorias: any;
  id: any;

  constructor(
    private router: Router,
    private loading: LoadingController,
    private servicio: ServiciosService,
    private activeroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.listarcategorias();
    this.listarJuntas();
  }

  async getDatos(){
    const data = JSON.parse(window.localStorage.getItem('usuario'));

     this.nombre = data.nombres + data.apellido_parteno;
     this.documento = data.apellido;

     console.log(data);

 }

 async listarJuntas(){
   const loader = await this.loading.create({
     cssClass: 'loader_cont',
    }); loader.present();


    this.activeroute.params.subscribe((data: any)=>{
      this.id = data.id;

      return this.servicio.getDataParamsAPI('juntaByCategory', this.id)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .subscribe((data: any)=>{
        this.usuarios = data.junta;
        console.log(data);
        loader.dismiss();
      });
    });


 }


 async listarcategorias(){
  return this.servicio.getDataAPI('categoriasJuntas')
  .subscribe((data: any)=>{
    this.categorias = data.categorias;
    console.log(this.categorias);
  });

}


 cerrarSesion(){
   localStorage.clear();
   this.router.navigate(['/folder']);
 }

}
