import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

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
  providers: [PhotoViewer],
  declarations: [CursoReservaPage]
})
export class CursoReservaPageModule {}
