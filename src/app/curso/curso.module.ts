import { TarjetaCursoComponent } from './components/tarjeta-curso/tarjeta-curso.component';
import { ContenedorCursosComponent } from './components/contenedor-cursos/contenedor-cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoPageRoutingModule } from './curso-routing.module';

import { CursoPage } from './curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoPageRoutingModule
  ],
  declarations: [CursoPage,ContenedorCursosComponent, TarjetaCursoComponent]
})
export class CursoPageModule {}
