import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-login-colegiado',
  templateUrl: './login-colegiado.page.html',
  styleUrls: ['./login-colegiado.page.scss'],
})
export class LoginColegiadoPage implements OnInit {
  cip: any;
  clave: any;

  constructor(
    private router:Router,

    public servicio: ServiciosService
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem("usuario") != null) {
      this.router.navigate(['/inicio']);
    }
  }

  async IniciarSesion(){
    let formData = {
        reg_cap : this.cip,
        clave : this.clave
    }

    return this.servicio.postDataAPI(formData, 'login-colegiado')
    .subscribe((data: any) => {
      if(data != null){
        window.localStorage.setItem("usuario", JSON.stringify(data));
        const tipo_usuario = "colegiado";
        window.localStorage.setItem("tipo_usuario", tipo_usuario);
        console.log(JSON.parse(localStorage.getItem('usuario')));
        window.location.reload();
      }
      else{
        this.servicio.Mensaje('Datos Erroneos, Vuelva a intentar!', 'danger');
      }
    });
  }

}
