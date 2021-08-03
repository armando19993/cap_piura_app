import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasByCategoryPage } from './noticias-by-category.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasByCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasByCategoryPageRoutingModule {}
