import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSolicitudAlquilerPageRoutingModule } from './detalle-solicitud-alquiler-routing.module';

import { DetalleSolicitudAlquilerPage } from './detalle-solicitud-alquiler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSolicitudAlquilerPageRoutingModule
  ],
  declarations: [DetalleSolicitudAlquilerPage]
})
export class DetalleSolicitudAlquilerPageModule {}
