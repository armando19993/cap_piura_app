import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuntaByCategoryPageRoutingModule } from './junta-by-category-routing.module';

import { JuntaByCategoryPage } from './junta-by-category.page';
import { TarjetaUsuarioComponent } from './components/tarjeta-usuario/tarjeta-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuntaByCategoryPageRoutingModule
  ],
  declarations: [JuntaByCategoryPage, TarjetaUsuarioComponent],
  exports: [
    TarjetaUsuarioComponent
  ]
})
export class JuntaByCategoryPageModule {}
