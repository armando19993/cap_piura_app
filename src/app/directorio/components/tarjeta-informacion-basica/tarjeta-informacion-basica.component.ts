import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-informacion-basica',
  templateUrl: './tarjeta-informacion-basica.component.html',
  styleUrls: ['./tarjeta-informacion-basica.component.scss'],
})
export class TarjetaInformacionBasicaComponent implements OnInit {

  items: any = [
    {titulo:'Razón Social:', icono:'business', contenido:'COLEGIO INGS PERU CONSEJO DPTAL DE PIURA', esLink:false},
    {titulo:'RUC:', icono:'book', contenido:'20222225206',esLink:false},
    {titulo:'Central Telefónica:', icono:'call', contenido:'073-285030',esLink:false},
    {titulo:'Horario:', icono:'time', contenido:'Lun-Vier: 08:00 A 13:00 - 14:00 A 18:00 | Sab 09:00 - 12:00',esLink:false},
    {titulo:'Dirección Legal:', icono:'pin',
      contenido:'Nro. S/N Urb. Los Geranios - El Chipe(Esq. Las Dalias Palmeras) Piura - Piura -Piura', esLink:false},
    {titulo:'Sitio Web:', icono:'link', contenido:'www.cippiura.org', esLink:true}
  ];

  redes: any = [
    {nombre:'Facebook', icono:'logo-facebook', link:'www.facebook.com'},
    {nombre:'Youtube', icono:'logo-instagram', link:'www.youtube.com'},
    {nombre:'Instagram', icono:'logo-youtube', link:'www.instagram.com'},
  ];


  constructor() { }

  ngOnInit() {}

}
