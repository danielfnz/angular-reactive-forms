import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

import { QuestionariosService } from '../questionarios.service';
import { Questionarios } from '../questionarios.interface';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss'],
})
export class QuestionarioComponent implements OnInit, OnDestroy {

  questionarioId: any;
  questionario: Questionarios;

  isAlive = true;
  carregando = true;
  questionarioRespondido = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private questionarioServico: QuestionariosService
  ) { }

  ngOnInit() {

    this.activatedRoute.params
      .pipe(
        takeWhile(() => this.isAlive),
      ).subscribe((values) => {
        this.questionarioId = values.id;

        if (this.questionarioId) {
          this.carregarDados();
        }
      });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  carregarDados(): any {
    console.log('Formulario carregado');
    this.questionarioServico.getQuestionarioById(this.questionarioId).subscribe((response: Questionarios) => {
      this.questionario = response;
      console.log(this.questionario);
      this.carregando = false;
    });
  }

  decisaoSalvar() {
    this.questionarioRespondido = true;
  }

  decisaoVoltar() {
    this._location.back();
  }
}
