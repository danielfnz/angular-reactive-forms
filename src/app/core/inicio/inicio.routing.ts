import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { ModuleWithProviders } from '@angular/core';

export const InicioRoutes = [{
  path: '',
  data: {
    title: 'Inicio',
  },
  component: InicioComponent,
}];

export const InicioRouting: ModuleWithProviders = RouterModule.forChild(InicioRoutes);
