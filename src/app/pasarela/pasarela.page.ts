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

  constructor(
    private http: HttpClient,
    private activeroute: ActivatedRoute,
    private router: Router,
  ) {}



  ngOnInit(){
    Mercadopago.setPublishableKey("TEST-46e6db42-df00-4ba4-80c8-ce9b9e7303f4");
    Mercadopago.getIdentificationTypes();

    this.activeroute.params.subscribe((data: any)=>{
      this.id = data.id;
      this.monto = data.monto;
    });
  }

  setCardTokenAndPay(status, response) {
    if (status == 200 || status == 201) {
        let form = (<HTMLInputElement>document.getElementById('paymentForm'));
        let card = <HTMLInputElement>document.createElement('input');
        card.setAttribute('name', 'token');
        card.setAttribute('id', 'token');
        card.setAttribute('type', 'text');
        card.setAttribute('hidden', 'false');
        card.setAttribute('value', response.id);
        form.appendChild(card);
        console.log(response.id);
    } else {
        console.log(response);
    }
  };

  async setPaymentMethod(status, response) {
    if (status == 200) {
        let paymentMethod = response[0];
        (<HTMLInputElement>document.getElementById("paymentMethodId")).value = paymentMethod.id;
        console.log((<HTMLInputElement>document.getElementById("paymentMethodId")).value);    
    } else {
        alert(`payment method info error: ${response}+ ${status}`);
    }
  };

  async setIssuers(status, response) {
    if (status == 200) {
        let issuerSelect = <HTMLInputElement>document.getElementById('issuer');
        response.forEach( issuer => {
            let opt = document.createElement('option');
            opt.text = issuer.name;
            opt.value = issuer.id;
            issuerSelect.appendChild(opt);
        });
  
    } else {
        alert(`issuers method info error: ${response}`);
    }
  }

  async getbancos() {
    let paymentMethodId = (<HTMLInputElement>document.getElementById("paymentMethodId")).value;
    Mercadopago.getIssuers(
        paymentMethodId,
        this.setIssuers
    );
  }

  async guessPaymentMethod(event) {
    let cardnumber = (<HTMLInputElement>document.getElementById("cardNumber")).value;
      console.log(cardnumber);
        Mercadopago.getPaymentMethod({
            "bin": cardnumber
        }, this.setPaymentMethod);
 };

 getCardToken(event){
  // event.preventDefault();
       let $form = (<HTMLInputElement>document.getElementById('paymentForm'));
       Mercadopago.createToken($form, this.setCardTokenAndPay);
       return false;
 };

 async pagar(){
  let form = {
   "transaction_amount": Number(this.monto),
   "token": (<HTMLInputElement>document.getElementById("token")).value,
   "description": "Pago Servicio, CAP Piura, atraves de Aplicativo Movil",
   "installments": 1,
   "payment_method_id": (<HTMLInputElement>document.getElementById("paymentMethodId")).value,
   "payer": {
     "email": "test@test.com"
   }

 }
   this.postDataAPI_MP(form).subscribe((val) =>{
   
     var arr = JSON.stringify(val);
     var parsed = JSON.parse (arr);
     let arreglo = [];
     console.log(parsed);
     this.sdkResponseHandler = parsed;

     if(parsed.status == "approved"){
       this.router.navigate(['/pago-exitoso/'+this.id+'/'+parsed.id]);
     }
   });
 }

 postDataAPI_MP(bodys){     
  let headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
   'Access-Control-Allow-Origin': '*',
   "Access-Control-Allow-Credentials":" true",
   "Authorization": 'Bearer TEST-7704156678097466-010904-a33b280de26eb4d1e747cf84848e3706-696588363',
   "Access-Control-Allow-Headers":"Content-Type,Access-Control-Allow-Methods, Access-Control-Allow-Origin",
  });

 return this.http.post(this.serverMP, JSON.stringify(bodys), {headers: headers})
}
}
