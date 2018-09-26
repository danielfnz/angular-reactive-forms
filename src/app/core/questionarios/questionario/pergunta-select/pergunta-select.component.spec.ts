import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../../../shared/shared.module';
import { PerguntaSelectComponent } from './pergunta-select.component';

describe('PerguntaSelectComponent', () => {
  let component: PerguntaSelectComponent;
  let fixture: ComponentFixture<PerguntaSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerguntaSelectComponent],
      imports: [SharedModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerguntaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
