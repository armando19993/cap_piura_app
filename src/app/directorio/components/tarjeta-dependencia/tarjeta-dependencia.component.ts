import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-dependencia',
  templateUrl: './tarjeta-dependencia.component.html',
  styleUrls: ['./tarjeta-dependencia.component.scss'],
})
export class TarjetaDependenciaComponent implements OnInit {

  itemsDependencias: any = [
    {nombre:'Colegiatura', codigo:'073 - 285030 - Anexo 1008',abierto: false,
     usuarios:[
      {nombre: 'Lic. GIULLIANA BELÉN CELI CARRASCO', photo:'' , cargo:'Auxiliar Administrativo', correo:'colegiatura@cippiura.org',
       telefono:'954727530'}
     ]},
    {nombre:'Contabilidad', codigo:'073 - 285030 - Anexo 1002', abierto: false,
     usuarios:[
      {nombre: 'CPC. RUTH VIVIANA ALDANA HUAMÁN', photo:'' , cargo:'Contadora', correo:'contabilidad@cippiura.org', telefono:''},
      {nombre: 'CPC. SARA BELÉN YOVERA RAMIREZ', photo:'' , cargo:'Asistente Contable', correo:'asistente-contable@cippiura.org',
       telefono:''}
     ]},
    {nombre:'Centro de Arbitraje y Resolución de Disputa', codigo:'073 - 285030 - Anexo 1011', abierto:false,
     usuarios:[
      {nombre: 'Abog. ELIZABETH JULIANA ATOCHE CHIRA', photo:'' , cargo:'Administradora', correo:'card@cippiura.org', telefono:'954726622'},
      {nombre: 'FAUSTINO PRIETO VILLEGAS', photo:'' , cargo:'Asistente Administrativo', correo:'asitente-card@cippiura.org', telefono:''}
     ]}
  ];

  constructor() { }

  ngOnInit() {}

}
