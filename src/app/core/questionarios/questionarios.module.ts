import { SharedModule } from './../../shared/shared.module';
import { QuestionarioComponent } from './questionario/questionario.component';
import { QuestionariosComponent } from './questionarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionarioRouting } from './questionarios.routing';
import { PerguntaSelectComponent } from './questionario/pergunta-select/pergunta-select.component';
import { PerguntaRadioComponent } from './questionario/pergunta-radio/pergunta-radio.component';
import { QuestionarioNovoComponent } from './questionario-novo/questionario-novo.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionarioRouting,
    SharedModule,
  ],
  declarations: [
    QuestionarioComponent,
    QuestionariosComponent,
    PerguntaSelectComponent,
    PerguntaRadioComponent,
    QuestionarioNovoComponent,
  ],
})
export class QuestionariosModule { }
