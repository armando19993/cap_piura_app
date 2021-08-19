import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosByCategoryPage } from './cursos-by-category.page';

const routes: Routes = [
  {
    path: '',
    component: CursosByCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosByCategoryPageRoutingModule {}
