import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarClavePage } from './editar-clave.page';

const routes: Routes = [
  {
    path: '',
    component: EditarClavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarClavePageRoutingModule {}
