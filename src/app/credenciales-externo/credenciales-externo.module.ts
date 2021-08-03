import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredencialesExternoPageRoutingModule } from './credenciales-externo-routing.module';

import { CredencialesExternoPage } from './credenciales-externo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredencialesExternoPageRoutingModule
  ],
  declarations: [CredencialesExternoPage]
})
export class CredencialesExternoPageModule {}
