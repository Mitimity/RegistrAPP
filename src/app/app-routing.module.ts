import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'generar-qr/:id',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GenerarQRPageModule)
  },
  {
    path: 'tabs/:id',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'cam-contras',
    loadChildren: () => import('./pages/cam-contras/cam-contras.module').then( m => m.CamContrasPageModule)
  },
  {
    path: 'bie-prof',
    loadChildren: () => import('./pages/bie-prof/bie-prof.module').then( m => m.BieProfPageModule)
  },
  {
    path: 'bie-alum',
    loadChildren: () => import('./pages/bie-alum/bie-alum.module').then( m => m.BieAlumPageModule),
  },
  {
    path: 'tab-alumn/:id',
    loadChildren: () => import('./pages/tab-alumn/tab-alumn.module').then( m => m.TabAlumnPageModule),
  },
  {
    path: 'capturar-qr',
    loadChildren: () => import('./pages/capturar-qr/capturar-qr.module').then( m => m.CapturarQrPageModule),
  },
  {
    path: '**',
    loadChildren: () => import('./pages/p404/p404.module').then( m => m.P404PageModule)
  },
  {
    path: 'listado-asis-profe',
    loadChildren: () => import('./pages/listado-asis-profe/listado-asis-profe.module').then( m => m.ListadoAsisProfePageModule)
  },  {
    path: 'listado-asis-alum',
    loadChildren: () => import('./pages/listado-asis-alum/listado-asis-alum.module').then( m => m.ListadoAsisAlumPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
