import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { ModuleWithProviders } from '@angular/core';
import { QuestionarioRespondidoComponent } from '../../shared/components/questionario-respondido/questionario-respondido.component';

export const InicioRoutes = [{
  path: '',
  data: {
    title: 'Inicio',
  },
  component: InicioComponent,
}, {
  path: 'questionariorespondido',
  data: {
    title: 'Inicio',
  },
  component: QuestionarioRespondidoComponent,
}];

export const InicioRouting: ModuleWithProviders = RouterModule.forChild(InicioRoutes);
