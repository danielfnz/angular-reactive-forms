import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Questionario } from './questionario/questionario.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionariosService {
  private readonly API = `${environment.API}`;

  constructor(private http: HttpClient) { }

  getQuestionarios(): Observable<Questionario>  {
    return this.http.get<Questionario>(this.API);
  }

  getQuestionarioById(id: any): Observable<Questionario> {
    const subject = new Subject<any>();

    if (localStorage.getItem(id)) {
      setTimeout(() => {
        subject.next(JSON.parse(localStorage.getItem(id)));
      },         100);
      return subject.asObservable();
    // tslint:disable-next-line:no-else-after-return
    } else {
      return this.http.get<Questionario>(`${this.API}/${id}`);
    }
  }

  createQuestionario(questionario: Questionario): Observable<Questionario> {
    return this.http.post<Questionario>(this.API, questionario);
  }

  updateQuestionario(id: string, questionario: Questionario): Promise<any> {
    return new Promise((resolve, reject) => {
      localStorage.setItem(id, JSON.stringify(questionario));
      resolve();
    });
  }

  deleteQuestionario(id: string): Promise<any>  {
    return new Promise((resolve, reject) => {
      localStorage.removeItem(id);
      resolve();
    });
  }

}
