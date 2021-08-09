import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoReservaPage } from './curso-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: CursoReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoReservaPageRoutingModule {}
