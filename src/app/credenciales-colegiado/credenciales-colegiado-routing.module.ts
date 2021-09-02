import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredencialesColegiadoPage } from './credenciales-colegiado.page';

const routes: Routes = [
  {
    path: '',
    component: CredencialesColegiadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredencialesColegiadoPageRoutingModule {}
