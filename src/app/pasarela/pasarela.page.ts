import { CausaError } from './models/causaError';
import { ServiciosService } from 'src/app/servicios.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
declare var Mercadopago: any;

@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.page.html',
  styleUrls: ['./pasarela.page.scss'],
})

export class PasarelaPage implements OnInit {

 sdkResponseHandler: any[];

  serverMP: string = 'https://api.mercadopago.com/v1/payments';
  id: any;
  monto: any;
  creditCard: string;
  cardNumber: any;
  listaErrores: CausaError[] = [];

  constructor(
    private http: HttpClient,
    private activeroute: ActivatedRoute,
    private router: Router,
    private servicio: ServiciosService
  ) {}

  ngOnInit(){
    Mercadopago.setPublishableKey('TEST-46e6db42-df00-4ba4-80c8-ce9b9e7303f4');
    Mercadopago.getIdentificationTypes();

    localStorage.removeItem('errores');

    this.activeroute.params.subscribe((data: any)=>{
      this.id = data.id;
      this.monto = data.monto;
    });
  }

  setCardTokenAndPay(status, response) {
    if (status === 200 || status === 201) {
        const form = (<HTMLInputElement>document.getElementById('paymentForm'));
        const card = <HTMLInputElement>document.createElement('input');
        card.setAttribute('name', 'token');
        card.setAttribute('id', 'token');
        card.setAttribute('type', 'text');
        card.setAttribute('hidden', 'false');
        card.setAttribute('value', response.id);
        form.appendChild(card);
        console.log(response.id);

        return response;
    } else {
      localStorage.removeItem('errores');

      const listaErrores: CausaError[] = [];
      response?.cause?.forEach(item => {
        const cause: CausaError = new CausaError();
        cause.code = item.code;
        cause.description = item.description;

        listaErrores.push(cause);

      });

      localStorage.setItem('errores',JSON.stringify(listaErrores));
      return response;
    }
  }

  tieneError(errorCode: string) {
    const lista = JSON.parse(localStorage.getItem('errores')) as CausaError[];

    if (lista === null) {
      return false;
    }

    const tiene = lista?.find(x => x.code === errorCode);

    if (tiene !== undefined) { return true; }
    else { return false; }
  }

  async setPaymentMethod(status, response) {
    if (status === 200) {
      const paymentMethod = response[0];
      (<HTMLInputElement>document.getElementById('paymentMethodId')).value = paymentMethod.id;
    } else {
      alert(`payment method info error: ${response}+ ${status}`);
    }
  };

  async setIssuers(status, response) {
    if (status === 200) {
      const issuerSelect = <HTMLInputElement>document.getElementById('issuer');
      response.forEach( issuer => {
          const opt = document.createElement('option');
          opt.text = issuer.name;
          opt.value = issuer.id;
          issuerSelect.appendChild(opt);
      });

    } else {
      alert(`issuers method info error: ${response}`);
    }
  }

  async getbancos() {
    const paymentMethodId = (<HTMLInputElement>document.getElementById('paymentMethodId')).value;
    Mercadopago.getIssuers(paymentMethodId,this.setIssuers);
  }

  obtenerImagenTarjeta(){

    let paymentMethod = (<HTMLInputElement>document.getElementById("paymentMethodId"))?.value;

    if (paymentMethod !== '') {
      if(paymentMethod === 'master') {
        paymentMethod = 'mastercard';
      }
      return `../../assets/images/${paymentMethod}.png`;
    }
    else{
      return '';
    }
  }

  async guessPaymentMethod() {
    const cardnumber = (<HTMLInputElement>document.getElementById("cardNumber")).value;
    Mercadopago.getPaymentMethod({ bin: cardnumber}, this.setPaymentMethod);
  };

  getCardToken(){

    const $form = (<HTMLInputElement>document.getElementById('paymentForm'));
    Mercadopago.createToken($form, this.setCardTokenAndPay);

    return false;
  };

  async pagar(){
    const form = {
      "transaction_amount": Number(this.monto),
      "token": (<HTMLInputElement>document.getElementById("token"))?.value,
      "description": "Pago Servicio, CAP Piura, atraves de Aplicativo Movil",
      "installments": 1,
      "payment_method_id": (<HTMLInputElement>document.getElementById("paymentMethodId"))?.value,
      "payer": { "email": "test@test.com" }

    };

    this.postDataAPI_MP(form).subscribe((val) =>{
      var arr = JSON.stringify(val);
      var parsed = JSON.parse (arr);
    });
  }

  postDataAPI_MP(bodys) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Credentials":" true",
      "Authorization": 'Bearer TEST-7704156678097466-010904-a33b280de26eb4d1e747cf84848e3706-696588363',
      "Access-Control-Allow-Headers":"Content-Type,Access-Control-Allow-Methods, Access-Control-Allow-Origin",
    });

    return this.http.post(this.serverMP, JSON.stringify(bodys), {headers: headers});
  }
}
