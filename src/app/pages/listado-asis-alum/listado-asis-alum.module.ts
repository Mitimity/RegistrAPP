import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoAsisAlumPageRoutingModule } from './listado-asis-alum-routing.module';

import { ListadoAsisAlumPage } from './listado-asis-alum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoAsisAlumPageRoutingModule
  ],
  declarations: [ListadoAsisAlumPage]
})
export class ListadoAsisAlumPageModule {}
