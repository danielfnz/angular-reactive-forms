import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App404Component } from './404.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('App404Component', () => {
  let component: App404Component;
  let fixture: ComponentFixture<App404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [App404Component],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
