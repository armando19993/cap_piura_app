import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

import { IonicModule } from '@ionic/angular';

import { CursoPagoPageRoutingModule } from './curso-pago-routing.module';

import { CursoPagoPage } from './curso-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoPagoPageRoutingModule
  ],
  providers: [PhotoViewer],
  declarations: [CursoPagoPage]
})
export class CursoPagoPageModule {}
