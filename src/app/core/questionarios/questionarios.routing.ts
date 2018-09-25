import { QuestionarioNaoEncontradoComponent } from './questionario-nao-encontrado/questionario-nao-encontrado.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { QuestionarioComponent } from './questionario/questionario.component';

export const QuestionarioRoutes = [
  {
    path: '',
    data: {
      title: 'Questionários',
    },
    component: QuestionarioNaoEncontradoComponent,
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
