import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginExternoPageRoutingModule } from './login-externo-routing.module';

import { LoginExternoPage } from './login-externo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginExternoPageRoutingModule
  ],
  declarations: [LoginExternoPage]
})
export class LoginExternoPageModule {}
