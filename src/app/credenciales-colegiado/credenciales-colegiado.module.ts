import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CredencialesColegiadoPageRoutingModule } from './credenciales-colegiado-routing.module';

import { CredencialesColegiadoPage } from './credenciales-colegiado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CredencialesColegiadoPageRoutingModule
  ],
  declarations: [CredencialesColegiadoPage]
})
export class CredencialesColegiadoPageModule {}
