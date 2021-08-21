import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudAlquilerPageRoutingModule } from './solicitud-alquiler-routing.module';

import { SolicitudAlquilerPage } from './solicitud-alquiler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudAlquilerPageRoutingModule
  ],
  declarations: [SolicitudAlquilerPage]
})
export class SolicitudAlquilerPageModule {}
