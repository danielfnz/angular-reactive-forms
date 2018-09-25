import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioNaoEncontradoComponent } from './questionario-nao-encontrado.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuestionarioNaoEncontradoComponent', () => {
  let component: QuestionarioNaoEncontradoComponent;
  let fixture: ComponentFixture<QuestionarioNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionarioNaoEncontradoComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarioNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
