import { TarjetaUsuarioDependenciaComponent } from './components/tarjeta-usuario-dependencia/tarjeta-usuario-dependencia.component';
import { ItemDependenciaComponent } from './components/item-dependencia/item-dependencia.component';
import { TarjetaDependenciaComponent } from './components/tarjeta-dependencia/tarjeta-dependencia.component';
import { TarjetaInformacionBasicaComponent } from './components/tarjeta-informacion-basica/tarjeta-informacion-basica.component';
import { ItemRedSocialComponent } from './components/item-red-social/item-red-social.component';
import { ItemDirectorioComponent } from './components/item-directorio/item-directorio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectorioPageRoutingModule } from './directorio-routing.module';

import { DirectorioPage } from './directorio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectorioPageRoutingModule
  ],
  declarations: [DirectorioPage,ItemDirectorioComponent, ItemRedSocialComponent,TarjetaInformacionBasicaComponent,
    TarjetaDependenciaComponent,ItemDependenciaComponent,TarjetaUsuarioDependenciaComponent]
})
export class DirectorioPageModule {}
