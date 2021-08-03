import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuntaDirectivaPage } from './junta-directiva.page';

const routes: Routes = [
  {
    path: '',
    component: JuntaDirectivaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuntaDirectivaPageRoutingModule {}
