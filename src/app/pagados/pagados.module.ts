import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagadosPageRoutingModule } from './pagados-routing.module';

import { PagadosPage } from './pagados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagadosPageRoutingModule
  ],
  declarations: [PagadosPage]
})
export class PagadosPageModule {}
