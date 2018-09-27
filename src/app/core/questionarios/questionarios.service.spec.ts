/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuestionariosService } from './questionarios.service';
import { HttpClientModule } from '@angular/common/http';

const mockQuestionario = {
  nomeQuestionario: 'Perfil do investidor - Questionário',
  perguntas: [
    {
      titulo: 'Qual o seu comportamento em relação aos seus investimentos?',
      tipo: 'radio',
      opcoes: [
        'Preservar meu dinheiro sem correr riscos',
        'Ganhar mais dinheiro, assumindo ricos moderados',
        'Ganhar mais dinheiro, assumindo ricos agressivos',
      ],
      resposta: null,
    },
  ],
};

describe('Service: Questionarios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionariosService],
      imports: [HttpClientModule],
    });
  });

  it('Deve criar o service', inject([QuestionariosService], (service: QuestionariosService) => {
    expect(service).toBeTruthy();
  }));

  it('getQuestionarios - Deve retornar erro 404', inject([QuestionariosService], (service: QuestionariosService) => {
    service.getQuestionarios().subscribe((result) => {
      expect(result['status']).toBe(404);
    });
  }));

  it('getQuestionarioById - Deve retornar o nomeQuestionario', inject([QuestionariosService], (service: QuestionariosService) => {
    service.getQuestionarioById('5bac4e6d3100000f0065463a').subscribe((result) => {
      expect(result).toContain({
        nomeQuestionario : 'Perfil do investidor - Questionário',
      });
    });
  }));

  it('createQuestionario - Deve retornar erro 404', inject([QuestionariosService], (service: QuestionariosService) => {

    service.createQuestionario(mockQuestionario).subscribe((result) => {
      expect(result['status']).toBe(404);
    });
  // tslint:disable-next-line:whitespace
  }));

  it('updateQuestionario - Deve salvar o questionario em localhost', inject([QuestionariosService], (service: QuestionariosService) => {

    // REMOVE DO FORMULARIO DO LOCAL STORAGE
    service.deleteQuestionario('5bac4e6d3100000f0065463a').then((deletado) => {
      service.updateQuestionario('5bac4e6d3100000f0065463a', mockQuestionario).then((sucesso) => {
        service.getQuestionarioById('5bac4e6d3100000f0065463a').subscribe((result) => {

          // FIX - TIMEOUT getQuestionarioById
          setTimeout(() => {
            expect(JSON.stringify(result)).toContain(JSON.stringify(mockQuestionario));
          },         200);

        });
      });

    });

  }));

  it('deleteQuestionario - Deve deletar o formulario do localstorage', inject([QuestionariosService], (service: QuestionariosService) => {
    service.deleteQuestionario('5bac4e6d3100000f0065463a').then((result) => {
      expect(result).toBeNull();
    });
  }));

});
