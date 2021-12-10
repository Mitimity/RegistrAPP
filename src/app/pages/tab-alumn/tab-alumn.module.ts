import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabAlumnPageRoutingModule } from './tab-alumn-routing.module';

import { TabAlumnPage } from './tab-alumn.page';

import { Routes, RouterModule }from '@angular/router';

const routes: Routes=[{
  path:'',
  component: TabAlumnPage,
  children: [
    {
      path: 'bie-alum/:id',
      loadChildren: () => import('../bie-alum/bie-alum.module').then( m => m.BieAlumPageModule)
    },
    {
      path: 'listado-asis-alum/:id',
      loadChildren: () => import('../listado-asis-alum/listado-asis-alum.module').then( m => m.ListadoAsisAlumPageModule)
    },
    {
      path: 'capturar-qr/:id',
      loadChildren: () => import('../capturar-qr/capturar-qr.module').then( m => m.CapturarQrPageModule)
    }
  ],
}];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabAlumnPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabAlumnPage]
})
export class TabAlumnPageModule {}
