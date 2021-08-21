import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudAlquilerPage } from './solicitud-alquiler.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudAlquilerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudAlquilerPageRoutingModule {}
