import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CetificadosHabilidadPageRoutingModule } from './cetificados-habilidad-routing.module';

import { CetificadosHabilidadPage } from './cetificados-habilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CetificadosHabilidadPageRoutingModule
  ],
  declarations: [CetificadosHabilidadPage]
})
export class CetificadosHabilidadPageModule {}
