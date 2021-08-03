import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DependenciaDirectorioPageRoutingModule } from './dependencia-directorio-routing.module';

import { DependenciaDirectorioPage } from './dependencia-directorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DependenciaDirectorioPageRoutingModule
  ],
  declarations: [DependenciaDirectorioPage]
})
export class DependenciaDirectorioPageModule {}
