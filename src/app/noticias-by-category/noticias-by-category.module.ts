import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasByCategoryPageRoutingModule } from './noticias-by-category-routing.module';

import { NoticiasByCategoryPage } from './noticias-by-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasByCategoryPageRoutingModule
  ],
  declarations: [NoticiasByCategoryPage]
})
export class NoticiasByCategoryPageModule {}
