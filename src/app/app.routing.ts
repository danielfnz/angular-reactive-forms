import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CoreComponent } from './core/core.component';
import { App404Component } from './erros/404/404.component';

const AppRoutes: Routes = [
  {
    path: '',
    data: { title: '' },
    component: CoreComponent,
  },
  {
    path: '404',
    data: { title: '404 - Página não encontrada' },
    component: App404Component,
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {
  useHash: true,
});
