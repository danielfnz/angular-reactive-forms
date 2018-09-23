import { QuestionarioRouting } from './questionario.routing';
import { QuestionarioComponent } from './questionario.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuestionarioRespondidoComponent } from './questionario-respondido/questionario-respondido.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionarioRouting,
  ],
  declarations: [QuestionarioComponent, QuestionarioRespondidoComponent],
})
export class QuestionarioModule {}
