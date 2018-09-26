import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntaRadioComponent } from './pergunta-radio.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormGroup, FormControl } from '@angular/forms';

describe('PerguntaRadioComponent', () => {
  let component: PerguntaRadioComponent;
  let fixture: ComponentFixture<PerguntaRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerguntaRadioComponent],
      imports: [SharedModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerguntaRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
