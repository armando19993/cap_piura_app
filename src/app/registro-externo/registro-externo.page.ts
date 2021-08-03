import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-registro-externo',
  templateUrl: './registro-externo.page.html',
  styleUrls: ['./registro-externo.page.scss'],
})
export class RegistroExternoPage implements OnInit {
  nombres: any;
  apellido_paterno: any;
  apellido_materno: any;
  dni: any;
  fecha_nacimiento: any;
  correo:any;
  ruc: any;
  celular: any;
  direccion: any;
  grado: any;
  profesion: any;
  sexo: any;

  public datepipe : DatePipe;
  

  constructor(
    private router: Router,
    private servicio: ServiciosService
  ) { }

  ngOnInit() {
  }

  crearUsuario(){
    let formData = {
        nombres : this.nombres,
        apellido_paterno : this.apellido_paterno,
        apellido_materno : this.apellido_materno,
        correo : this.correo,
        dni : this.dni,
        fecha_nacimiento : this.fecha_nacimiento, 
        ruc: this.ruc,
        celular: this.celular,
        direccion: this.direccion,
        grado: this.grado,
        profesion: this.profesion,
        sexo: this.sexo
    }

      return this.servicio.postDataAPI(formData, 'createUsuarioExterno')
      .subscribe((data: any) => {
        if(data != null){
          window.localStorage.setItem("usuario", JSON.stringify(data));
          const tipo_usuario = "externo";
          window.localStorage.setItem("tipo_usuario", tipo_usuario);
          this.router.navigate(['/inicio']);
          window.location.reload();
        }
      
    });
    
  }

}
