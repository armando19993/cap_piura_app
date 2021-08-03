import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-login-externo',
  templateUrl: './login-externo.page.html',
  styleUrls: ['./login-externo.page.scss'],
})
export class LoginExternoPage implements OnInit {

  dni: any;
  clave: any;

  passwordTypeInput  =  'password';

  constructor(
    private servicio: ServiciosService,
    private router: Router
  ) { }

  ngOnInit() {
    if (window.localStorage.getItem("usuario") != null) {
      this.router.navigate(['/inicio']);
    }
  }

  async IniciarSesion(){
    let formData = {
        dni : this.dni,
        clave : this.clave
    }

    return this.servicio.postDataAPI(formData, 'login-externo')
    .subscribe((data: any) => {
      if(data != null){
        window.localStorage.setItem("usuario", JSON.stringify(data));
        const tipo_usuario = "externo";
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
