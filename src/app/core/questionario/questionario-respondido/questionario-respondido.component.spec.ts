import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioRespondidoComponent } from './questionario-respondido.component';

describe('QuestionarioRespondidoComponent', () => {
  let component: QuestionarioRespondidoComponent;
  let fixture: ComponentFixture<QuestionarioRespondidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionarioRespondidoComponent],
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
