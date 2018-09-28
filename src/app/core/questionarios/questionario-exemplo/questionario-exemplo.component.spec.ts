import { QuestionarioComponent } from './../questionario/questionario.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioExemploComponent } from './questionario-exemplo.component';
import { PerguntaRadioComponent } from '../questionario/pergunta-radio/pergunta-radio.component';
import { PerguntaSelectComponent } from '../questionario/pergunta-select/pergunta-select.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../shared/shared.module';

describe('QuestionarioExemploComponent', () => {
  let component: QuestionarioExemploComponent;
  let fixture: ComponentFixture<QuestionarioExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionarioExemploComponent,
        QuestionarioComponent,
        PerguntaRadioComponent,
        PerguntaSelectComponent],
      imports: [RouterTestingModule, SharedModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarioExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
