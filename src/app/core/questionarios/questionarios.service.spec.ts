/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionariosService } from './questionarios.service';

describe('Service: Questionarios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionariosService]
    });
  });

  it('should ...', inject([QuestionariosService], (service: QuestionariosService) => {
    expect(service).toBeTruthy();
  }));
});
