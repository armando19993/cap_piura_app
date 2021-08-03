import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BolsaDetallePage } from './bolsa-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: BolsaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BolsaDetallePageRoutingModule {}
