import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private URL_API: string = 'http://localhost:8000/api/';
  //private URL_API: string = 'https://cap.armandocampos.com/api/';
  //private URL_API: string = 'https://robertoprincipe.com/api/';


  constructor(
    private http: HttpClient,
    private toast: ToastController

  ) { }

  async Mensaje(texto: string, tipo: string = 'success'){
    let t = await this.toast.create({
      message : texto,
      color: tipo,
      duration: 3000
    });
    t.present();
  }

  postDataAPI( bodys, file){
    let headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
    });

    let post ={
        headers: headers
    }

    return this.http.post(this.URL_API + file, JSON.stringify(bodys), {headers: headers})
  }

  getDataAPI(file){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      });

      let post ={
          headers: headers
      }

      return this.http.get(this.URL_API + file, {headers: headers})
  }

  getDataParamsAPI(file, params){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      });

      let post ={
          headers: headers
      }

      return this.http.get(this.URL_API + file + '/' + params, {headers: headers})
  }

  getDataParamsTwo(file, params, params2){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      });

      let post ={
          headers: headers
      }

      return this.http.get(this.URL_API + file + '/' + params + '/' + params2, {headers: headers})
  }
}
