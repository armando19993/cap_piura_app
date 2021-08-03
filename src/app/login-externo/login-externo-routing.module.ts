import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginExternoPage } from './login-externo.page';

const routes: Routes = [
  {
    path: '',
    component: LoginExternoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginExternoPageRoutingModule {}
