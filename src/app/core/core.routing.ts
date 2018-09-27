import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from './core.component';

export const CoreRoutes: Routes = [{
  path: '',
  component: CoreComponent,
  children: [
    {
      path: '',
      redirectTo: '/inicio',
      pathMatch: 'full',
    },
    {
      path: 'inicio',
      loadChildren: './inicio/inicio.module#InicioModule',
    },
    {
      path: 'questionarios',
      loadChildren: './questionarios/questionarios.module#QuestionariosModule',
    },
  ],
}];

export const CoreRouting: ModuleWithProviders = RouterModule.forChild(CoreRoutes);
