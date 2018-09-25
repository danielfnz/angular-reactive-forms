import { SharedModule } from './../../shared/shared.module';
import { QuestionarioRespondidoComponent } from './questionario-respondido/questionario-respondido.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { QuestionariosComponent } from './questionarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionarioRouting } from './questionarios.routing';
import { QuestionarioNaoEncontradoComponent } from './questionario-nao-encontrado/questionario-nao-encontrado.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionarioRouting,
    SharedModule,
  ],
  declarations: [
    QuestionarioComponent,
    QuestionariosComponent,
    QuestionarioRespondidoComponent,
    QuestionarioNaoEncontradoComponent,
  ],
})
export class QuestionariosModule { }
