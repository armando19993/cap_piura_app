import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginColegiadoPage } from './login-colegiado.page';

const routes: Routes = [
  {
    path: '',
    component: LoginColegiadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginColegiadoPageRoutingModule {}
