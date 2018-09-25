import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss'],
})
export class QuestionarioComponent implements OnInit, OnDestroy {

  questionarioId: any;
  isAlive = true;
  questionarioRespondido = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _location: Location,
  ) {}

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
  }

  decisaoSalvar() {
    this.questionarioRespondido = true;
  }

  decisaoVoltar() {
    this._location.back();
  }
}
