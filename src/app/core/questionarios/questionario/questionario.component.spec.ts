import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioComponent } from './questionario.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../../shared/shared.module';
import { PerguntaSelectComponent } from './pergunta-select/pergunta-select.component';
import { PerguntaRadioComponent } from './pergunta-radio/pergunta-radio.component';

describe('QuestionarioComponent', () => {
  let component: QuestionarioComponent;
  let fixture: ComponentFixture<QuestionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionarioComponent, PerguntaSelectComponent, PerguntaRadioComponent],
      imports: [RouterTestingModule, SharedModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
