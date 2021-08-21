import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Noticias', url: '/noticias', icon: 'newspaper' },
    { title: 'Junta Directiva', url: '/junta-directiva', icon: 'people' },
    { title: 'Directorio', url: '/directorio', icon: 'albums' },
    { title: 'Bolsa de Trabajo', url: '/bolsa-trabajo', icon: 'folder' },
    { title: 'Estado de Cuenta', url: '/estado-de-cuenta', icon: 'receipt'},
    { title: 'Alquileres', url: '/alquileres', icon: 'business'},
    { title: 'Pagos', url: '/pagos', icon: 'cash'},
    { title: 'Cursos / Capacitaciones', url: '/cursos', icon: 'school'},
    { title: 'Soporte App', url: '/', icon: 'help'}
  ];

  nombre: any;
  documento: any;
  estado: any;
  tipo: any;
  etiquetaEstado: string;
  tipoUser: any;

  constructor(
    private loading: LoadingController,

  ) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.getDatos();
  }

  ionViewWillEnter(){
    this.getDatos();
  }

  async getDatos(){

     const data = JSON.parse(window.localStorage.getItem('usuario'));

      this.estado = data.estado;
      this.tipo = window.localStorage.getItem('tipo_usuario');
      if(window.localStorage.getItem('tipo_usuario') === 'externo'){
        this.tipoUser = 'externo';
        this.nombre = data.nombres + ' ' + data.apellido_parteno;
        this.documento = data.dni;
        this.estado = 1;
      }
      if(window.localStorage.getItem('tipo_usuario') === 'colegiado'){
        this.tipoUser = 'colegiado';
        this.nombre = data.nombres + ' ' + data.apellido_paterno;
        this.documento = data.reg_cap;
        if(data.estado === 1){
          this.tipo = window.localStorage.getItem('tipo_usuario')+'_activo';
        }
        else{
          this.tipo = window.localStorage.getItem('tipo_usuario')+'_inactivo';
        }

        console.log(this.tipo);
      }

  }
}
