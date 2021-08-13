import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  declarations: [CursoPagoPage]
})
export class CursoPagoPageModule {}
