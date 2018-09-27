import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionarioNovoComponent } from './questionario-novo.component';

describe('QuestionarioNovoComponent', () => {
  let component: QuestionarioNovoComponent;
  let fixture: ComponentFixture<QuestionarioNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionarioNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarioNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
