import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/alert.service';
import { ServiciosService } from 'src/app/servicios.service';

@Component({
  selector: 'app-tarjeta-informacion-basica',
  templateUrl: './tarjeta-informacion-basica.component.html',
  styleUrls: ['./tarjeta-informacion-basica.component.scss'],
})
export class TarjetaInformacionBasicaComponent implements OnInit {

  // items: any = [
  //   {titulo:'Razón Social:', icono:'business', contenido:'COLEGIO INGS PERU CONSEJO DPTAL DE PIURA', esLink:false},
  //   {titulo:'RUC:', icono:'book', contenido:'20222225206',esLink:false},
  //   {titulo:'Central Telefónica:', icono:'call', contenido:'073-285030',esLink:false},
  //   {titulo:'Horario:', icono:'time', contenido:'Lun-Vier: 08:00 A 13:00 - 14:00 A 18:00 | Sab 09:00 - 12:00',esLink:false},
  //   {titulo:'Dirección Legal:', icono:'pin',
  //     contenido:'Nro. S/N Urb. Los Geranios - El Chipe(Esq. Las Dalias Palmeras) Piura - Piura -Piura', esLink:false},
  //   {titulo:'Sitio Web:', icono:'link', contenido:'www.cippiura.org', esLink:true}
  // ];

  directorio: any;

  // redes: any = [
  //   {nombre:'Facebook', icono:'logo-facebook', link:'www.facebook.com'},
  //   {nombre:'Youtube', icono:'logo-instagram', link:'www.youtube.com'},
  //   {nombre:'Instagram', icono:'logo-youtube', link:'www.instagram.com'},
  // ];


  constructor(private activeroute: ActivatedRoute,
    private alertService: AlertService,
    private loading: LoadingController,
    private servicio: ServiciosService) { }

  ngOnInit() {
    this.cargarDirectorio();
  }

  async cargarDirectorio(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();

    return this.servicio.getDataAPI('directorio')
    .subscribe((data: any)=>{
      this.directorio = data;

      console.log(data);
      console.log(this.directorio);


      // this.activeroute.params.subscribe((ruta: any) => {
      //   this.items = this.cursos.find(x => x.id === + ruta.cursoId);
      //   this.curso.foto =  'https://retos-operaciones-logistica.eae.es/wp-content/uploads/2018/04/iStock-627490508.jpg';
      //   console.log(this.curso);
      // });

      loader.dismiss();

    });
  }


}
