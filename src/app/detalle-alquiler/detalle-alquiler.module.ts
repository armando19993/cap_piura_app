import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAlquilerPageRoutingModule } from './detalle-alquiler-routing.module';

import { DetalleAlquilerPage } from './detalle-alquiler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAlquilerPageRoutingModule
  ],
  declarations: [DetalleAlquilerPage]
})
export class DetalleAlquilerPageModule {}
