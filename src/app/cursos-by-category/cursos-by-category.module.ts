import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosByCategoryPageRoutingModule } from './cursos-by-category-routing.module';

import { CursosByCategoryPage } from './cursos-by-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosByCategoryPageRoutingModule
  ],
  declarations: [CursosByCategoryPage]
})
export class CursosByCategoryPageModule {}
