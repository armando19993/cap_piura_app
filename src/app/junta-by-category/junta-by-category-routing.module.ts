import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuntaByCategoryPage } from './junta-by-category.page';

const routes: Routes = [
  {
    path: '',
    component: JuntaByCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuntaByCategoryPageRoutingModule {}
