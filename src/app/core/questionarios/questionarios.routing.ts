import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App404Component } from '../../erros/404/404.component';
import { QuestionarioComponent } from './questionario/questionario.component';

export const QuestionarioRoutes = [
  {
    path: '',
    data: {
      title: 'Questionários',
    },
    component: App404Component,
  },
  {
    path: ':id',
    data: {
      title: 'Responder questionário',
    },
    component: QuestionarioComponent,
  },
];

export const QuestionarioRouting: ModuleWithProviders = RouterModule.forChild(QuestionarioRoutes);
