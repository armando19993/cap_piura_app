import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DependenciaDirectorioPage } from './dependencia-directorio.page';

const routes: Routes = [
  {
    path: '',
    component: DependenciaDirectorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependenciaDirectorioPageRoutingModule {}
