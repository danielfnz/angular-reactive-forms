import { ModalTermosComponent } from './modal-termos.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ModalTermosComponent', () => {
  let component: ModalTermosComponent;
  let fixture: ComponentFixture<ModalTermosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTermosComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTermosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
