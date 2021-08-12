import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoComprobanteFacturaPage } from './curso-comprobante-factura.page';

const routes: Routes = [
  {
    path: '',
    component: CursoComprobanteFacturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoComprobanteFacturaPageRoutingModule {}
