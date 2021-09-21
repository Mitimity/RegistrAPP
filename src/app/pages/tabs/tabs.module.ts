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
      path: 'bie-prof',
      loadChildren: () => import('../bie-prof/bie-prof.module').then( m => m.BieProfPageModule)
    },
    {
      path: 'generar-qr',
      loadChildren: () => import('../generar-qr/generar-qr.module').then( m => m.GenerarQRPageModule)
    }
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
