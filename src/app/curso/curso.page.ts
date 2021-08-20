import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ServiciosService } from '../servicios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  botonSeleccionado: number;
  cursos: any;
  imagen: any;
  id: any;
  titulo: any;
  contenido: any;
  what: any;
  reservado: boolean;
  id_pago: any;
  monto: any;
  pago_id: any;
  id_reserva: any;
  status: any;

  constructor(
    private loading: LoadingController,
    private servicio: ServiciosService,
    private activeroute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activeroute.params.subscribe((data: any)=>{
      this.id = data.id;

      this.getCurso();
      this.getStatus();
    });
  }

  async getStatus(){
    const data = JSON.parse(window.localStorage.getItem('usuario'));
    console.log(data.dni);

    return this.servicio.getDataParamsTwo('getStatusCursoReserva', data.dni, this.id)
    .subscribe((data: any)=>{
      console.log(data);
      if(data == ""){
        this.reservado = false;
      }
      else{
        this.reservado = true;
        this.id_reserva = data[0].id;
        this.status = data[0].estado;
            }

      console.log("Estado Reserva: " + this.reservado);
      console.log(this.id_reserva);
    })
  }


  async getCurso(){
    const loader = await this.loading.create({
      cssClass: 'loader_cont',
     }); loader.present();


    this.activeroute.params.subscribe((data: any)=>{
      this.id = data.id;

      return this.servicio.getDataParamsAPI('getCurso', this.id)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      .subscribe((data: any)=>{
        const curso = data.curso[0];
        this.imagen = curso.foto;
        this.titulo = curso.titulo;
        this.monto = curso.costo;

        this.contenido = curso.descripcion;
        this.what = curso.whatsapp;
        loader.dismiss();
      });
    });
  }


  async reservar(){
    const data = JSON.parse(window.localStorage.getItem('usuario'));
    console.log(data);
    let formData = {
      nombre: data.nombres + " " + data.apellido_paterno + " " + data.apellido_materno,
      dni_usuario: data.dni,
      id_curso: this.id,
      estado: 1,
    }

    return this.servicio.postDataAPI(formData, 'reserva')
    .subscribe((data: any)=>{
      console.log(data);
      this.reservado = true;
      this.id_reserva = data;
      this.status = 1;
    })
  }

  async reservarPagar(){
    const data = JSON.parse(window.localStorage.getItem('usuario'));

    let formData = {
      reg_cap : data.reg_cap,
      monto : this.monto,
      id_curso: this.id_reserva,
      pago_concepto: "Curso / Capacitacion: " + this.titulo,
      estado: 1
    }

  return this.servicio.postDataAPI(formData, 'nuevaTransaccion')
  .subscribe((pago: any) => {
    this.pago_id = pago.id;
    let formData = {
      nombre: data.nombres + " " + data.apellido_paterno + " " + data.apellido_materno,
      dni_usuario: data.dni,
      id_curso: this.id,
      id_pago: pago.id,
      estado: 1,
    }

    return this.servicio.postDataAPI(formData, 'reserva')
    .subscribe((data: any)=>{
      this.router.navigate(['/tipo-documento/'+this.pago_id]);
    })
  });
  }

  async verificarPagar(){
    const data_user = JSON.parse(window.localStorage.getItem('usuario'));

    return this.servicio.getDataParamsTwo('getStatusCursoReserva', data_user.dni, this.id)
    .subscribe((data: any)=>{
      console.log(data);

      if(data[0].id_pago == null){
          let formData = {
            reg_cap : data_user.reg_cap,
            monto : this.monto,
            pago_concepto: "Curso / Capacitacion: " + this.titulo,
            id_curso: this.id_reserva,
            estado: 1
          }

          return this.servicio.postDataAPI(formData, 'nuevaTransaccion')
          .subscribe((pago: any) => {
            this.pago_id = pago.id;
            let formData = {
              nombre: data.nombres + " " + data.apellido_paterno + " " + data.apellido_materno,
              dni_usuario: data.dni,
              id_curso: this.id,
              id_pago: pago.id,
              estado: 1,
            }

            return this.servicio.getDataParamsTwo('updateIdPagoReserva', this.id_reserva, this.pago_id)
            .subscribe((data: any)=>{
              this.router.navigate(['/tipo-documento/'+this.pago_id]);
            })
          });
      }
      else{
        this.router.navigate(['/tipo-documento/'+data[0].id_pago]);
      }
    })
  }


}
