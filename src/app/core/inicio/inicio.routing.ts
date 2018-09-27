import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { ModuleWithProviders } from '@angular/core';
import { QuestionarioRespondidoComponent } from '../../shared/components/questionario-respondido/questionario-respondido.component';

export const InicioRoutes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'questionariorespondido',
    component: QuestionarioRespondidoComponent,
  },
];

export const InicioRouting: ModuleWithProviders = RouterModule.forChild(InicioRoutes);
