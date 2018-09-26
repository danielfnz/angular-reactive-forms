import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questionarios } from './questionarios.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionariosService {

  constructor(private http: HttpClient) { }
  baseUrl = 'https://0b3e8e6c-c195-49f5-b861-24b812e411c1.mock.pstmn.io/questionarios';

  getQuestionarios() {
    return this.http.get(this.baseUrl);
  }

  getQuestionarioById(id: any): Observable<any> {
    const subject = new Subject<any>();

    if (localStorage.getItem(id)) {
      setTimeout(() => {
        subject.next(JSON.parse(localStorage.getItem(id)));
      },         100);
      return subject.asObservable();
    // tslint:disable-next-line:no-else-after-return
    } else {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  }

  createQuestionario(questionario: Questionarios) {
    return this.http.post(this.baseUrl, questionario);
  }

  updateQuestionario(key: any, data: any) {
    return new Promise((resolve, reject) => {
      localStorage.setItem(key, JSON.stringify(data));
      resolve();
    });
  }

  deleteQuestionario(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
