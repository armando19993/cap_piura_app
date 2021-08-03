import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagadosPage } from './pagados.page';

const routes: Routes = [
  {
    path: '',
    component: PagadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagadosPageRoutingModule {}
