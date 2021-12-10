import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoAsisAlumPage } from './listado-asis-alum.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoAsisAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoAsisAlumPageRoutingModule {}
