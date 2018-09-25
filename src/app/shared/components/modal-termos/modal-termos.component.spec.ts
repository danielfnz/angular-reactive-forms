import { ModalTermosComponent } from './modal-termos.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatCheckboxModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

describe('ModalTermosComponent', () => {
  let component: ModalTermosComponent;
  let fixture: ComponentFixture<ModalTermosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTermosComponent],
      imports: [
        FormsModule,
        MatDialogModule,
        MatCheckboxModule,
      ],
      providers: [{
        provide: MatDialogRef,
        useValue: {},
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {}, // Add any data you wish to test if it is passed/used correctly
      }],
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
