import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CetificadosHabilidadPage } from './cetificados-habilidad.page';

const routes: Routes = [
  {
    path: '',
    component: CetificadosHabilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CetificadosHabilidadPageRoutingModule {}
