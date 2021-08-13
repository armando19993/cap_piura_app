import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoReservaPageRoutingModule } from './curso-reserva-routing.module';

import { CursoReservaPage } from './curso-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoReservaPageRoutingModule
  ],
  declarations: [CursoReservaPage]
})
export class CursoReservaPageModule {}
