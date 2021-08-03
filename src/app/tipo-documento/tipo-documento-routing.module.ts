import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoDocumentoPage } from './tipo-documento.page';

const routes: Routes = [
  {
    path: '',
    component: TipoDocumentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoDocumentoPageRoutingModule {}
