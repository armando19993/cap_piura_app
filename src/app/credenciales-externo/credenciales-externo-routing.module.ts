import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CredencialesExternoPage } from './credenciales-externo.page';

const routes: Routes = [
  {
    path: '',
    component: CredencialesExternoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredencialesExternoPageRoutingModule {}
