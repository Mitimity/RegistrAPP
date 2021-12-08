import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

import { Routes, RouterModule }from '@angular/router';

const routes: Routes=[{
  path:'',
  component: TabsPage,
  children: [
    {
      path: 'bie-prof/:id',
      loadChildren: () => import('../bie-prof/bie-prof.module').then( m => m.BieProfPageModule)
    },
    {
      path: 'generar-qr/:id',
      loadChildren: () => import('../generar-qr/generar-qr.module').then( m => m.GenerarQRPageModule)
    },
    {
      path: 'listado-asis-profe/:id',
      loadChildren: () => import('../listado-asis-profe/listado-asis-profe.module').then( m => m.ListadoAsisProfePageModule)
    },
  ],
}];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
