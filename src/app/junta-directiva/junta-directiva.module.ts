import { TarjetaUsuarioComponent } from './components/tarjeta-usuario/tarjeta-usuario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuntaDirectivaPageRoutingModule } from './junta-directiva-routing.module';

import { JuntaDirectivaPage } from './junta-directiva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuntaDirectivaPageRoutingModule
  ],
  declarations: [JuntaDirectivaPage,TarjetaUsuarioComponent],
  exports: [
    TarjetaUsuarioComponent
  ]
})
export class JuntaDirectivaPageModule {}
