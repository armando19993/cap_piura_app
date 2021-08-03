import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroExternoPageRoutingModule } from './registro-externo-routing.module';

import { RegistroExternoPage } from './registro-externo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroExternoPageRoutingModule
  ],
  declarations: [RegistroExternoPage]
})
export class RegistroExternoPageModule {}
