import { QuestionarioComponent } from './questionario.component';
import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const QuestionarioRoutes = [{
  path: '',
  data: {
    title: 'Questionário',
  },
  component: QuestionarioComponent,
}];

export const QuestionarioRouting: ModuleWithProviders = RouterModule.forChild(QuestionarioRoutes);
