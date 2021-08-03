import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarClavePageRoutingModule } from './editar-clave-routing.module';

import { EditarClavePage } from './editar-clave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarClavePageRoutingModule
  ],
  declarations: [EditarClavePage]
})
export class EditarClavePageModule {}
