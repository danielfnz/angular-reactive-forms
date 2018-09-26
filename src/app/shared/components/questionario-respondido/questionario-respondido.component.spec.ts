import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioRespondidoComponent } from './questionario-respondido.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuestionarioRespondidoComponent', () => {
  let component: QuestionarioRespondidoComponent;
  let fixture: ComponentFixture<QuestionarioRespondidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionarioRespondidoComponent],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarioRespondidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
