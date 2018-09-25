import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questionarios } from './questionarios.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionariosService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://d7c5b12c-e040-4f8f-89ae-238be4480c10.mock.pstmn.io/questionarios';

  getQuestionarios() {
    return this.http.get(this.baseUrl);
  }

  getQuestionarioById(id: number) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  createQuestionario(questionario: Questionarios) {
    return this.http.post(this.baseUrl, questionario);
  }

  updateQuestionario(questionario: Questionarios) {
    return this.http.put(this.baseUrl + '/' + questionario.id, questionario);
  }

  deleteQuestionario(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
