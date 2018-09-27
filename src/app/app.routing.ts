import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CoreComponent } from './core/core.component';
import { App404Component } from './erros/404/404.component';

const AppRoutes: Routes = [
  {
    path: '',
    component: CoreComponent,
  },
  {
    path: '404',
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
