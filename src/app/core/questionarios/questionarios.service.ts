import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questionarios } from './questionarios.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionariosService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://www.mocky.io/v2';

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

  updateQuestionario(id: string, data: any) {
    return new Promise((resolve, reject) => {
      localStorage.setItem(id, JSON.stringify(data));
      resolve();
    });
  }

  deleteQuestionario(id: string) {
    return new Promise((resolve, reject) => {
      localStorage.removeItem(id);
      resolve();
    });
  }

}
