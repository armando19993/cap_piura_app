import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoComprobanteFacturaPageRoutingModule } from './curso-comprobante-factura-routing.module';

import { CursoComprobanteFacturaPage } from './curso-comprobante-factura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoComprobanteFacturaPageRoutingModule
  ],
  declarations: [CursoComprobanteFacturaPage]
})
export class CursoComprobanteFacturaPageModule {}
