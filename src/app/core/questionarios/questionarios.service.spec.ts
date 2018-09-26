/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionariosService } from './questionarios.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Questionarios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionariosService],
      imports: [HttpClientModule],
    });
  });

  it('should ...', inject([QuestionariosService], (service: QuestionariosService) => {
    expect(service).toBeTruthy();
  }));
});
