import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroExternoPage } from './registro-externo.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroExternoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroExternoPageRoutingModule {}
