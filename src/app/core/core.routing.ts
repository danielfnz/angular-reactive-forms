import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreComponent } from './core.component';

export const CoreRoutes: Routes = [{
  // ROTAS PARA SEPARAÇÃO DE MODULOS
  path: '',
  component: CoreComponent,
  data: {
    title: 'Actuar',
  },
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
      path: 'questionario',
      loadChildren: './questionario/questionario.module#QuestionarioModule',
    },
  ],
}];

export const CoreRouting: ModuleWithProviders = RouterModule.forChild(CoreRoutes);
