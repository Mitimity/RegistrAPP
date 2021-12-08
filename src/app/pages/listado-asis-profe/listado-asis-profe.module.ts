import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoAsisProfePageRoutingModule } from './listado-asis-profe-routing.module';

import { ListadoAsisProfePage } from './listado-asis-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoAsisProfePageRoutingModule
  ],
  declarations: [ListadoAsisProfePage]
})
export class ListadoAsisProfePageModule {}
