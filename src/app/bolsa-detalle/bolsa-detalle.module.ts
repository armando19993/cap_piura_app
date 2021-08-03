import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolsaDetallePageRoutingModule } from './bolsa-detalle-routing.module';

import { BolsaDetallePage } from './bolsa-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BolsaDetallePageRoutingModule
  ],
  declarations: [BolsaDetallePage]
})
export class BolsaDetallePageModule {}
