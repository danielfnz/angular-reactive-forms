import { QuestionarioExemploComponent } from './questionario-exemplo/questionario-exemplo.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { App404Component } from '../../erros/404/404.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { QuestionarioNovoComponent } from './questionario-novo/questionario-novo.component';

export const QuestionarioRoutes = [
  { path: '', component: App404Component },
  { path: 'novo', component: QuestionarioNovoComponent },
  { path: 'exemplo', component: QuestionarioExemploComponent },
  { path: ':id',  component: QuestionarioComponent },
];

export const QuestionarioRouting: ModuleWithProviders = RouterModule.forChild(QuestionarioRoutes);
